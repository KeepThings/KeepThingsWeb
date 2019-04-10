import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher,  MatSnackBar} from '@angular/material';
import {DatePipe} from '@angular/common';
import {MarketplaceService} from '../../marketplace.service';
import { MarketplaceItem } from 'src/app/marketplace-item';
import {UserItem} from '../../user-item';
import {UserService} from '../../user.service';


// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/

@Component({
  selector: 'app-new-request-form',
  templateUrl: './new-request-form.component.html',
  styleUrls: ['./new-request-form.component.css'],
})
export class NewRequestFormComponent implements OnInit {
    
    marketplaceItems;

    titleFormControl = new FormControl('', [
        Validators.required,
    ]);
    descFormControl = new FormControl('', [
        Validators.required,
    ]);
    fromFormControl = new FormControl('', [
        Validators.required,
    ]);
    toFormControl = new FormControl('', [
        Validators.required,
    ]);
    matcher = new MyErrorStateMatcher();
  constructor(private marketplaceService: MarketplaceService, private snackBar: MatSnackBar, private datepipe: DatePipe, private userService: UserService) { }

  transformDate(date) {
      return this.datepipe.transform(date, 'yyyy-MM-dd');
  }
  ngOnInit() {
  }

  addMarketplaceItem(marketplaceItem: MarketplaceItem){
    this.marketplaceService.addMarketplaceItem(marketplaceItem).subscribe();
      this.snackBar.open('Request creation successful!');
      this.titleFormControl.setValue(' ');
      this.descFormControl.setValue(' ');
      this.fromFormControl.setValue(' ');
      this.toFormControl.setValue(' ');
      setTimeout(() => {
          this.snackBar.dismiss();
      }, 5000);
  }
    onSubmit() {
      if (this.titleFormControl.invalid || this.descFormControl.invalid || this.fromFormControl.invalid || this.toFormControl.invalid) {
          this.snackBar.open('All fields are required!');
          setTimeout(() => {
              this.snackBar.dismiss();
          }, 5000);
      } else {
          const newItem = new MarketplaceItem(this.marketplaceService.createItemId(), this.titleFormControl.value, this.descFormControl.value, this.userService.user.USER_ID, " ", this.fromFormControl, this.toFormControl );
          this.addMarketplaceItem(newItem);

        
      }

    }

}
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form.submitted;
        return !!(control && control.invalid && (control.dirty || isSubmitted));
    }
}

