import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher,  MatSnackBar} from '@angular/material';
import {DatePipe} from '@angular/common';
import {MarketplaceService} from '../../marketplace.service';
import {UserService} from '../../user.service';


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

  addMarketplaceItem(marketplaceItem) {
    this.marketplaceService.addMarketplaceItem(marketplaceItem).subscribe(item => this.marketplaceService.marketplaceItems.push(item));
      this.snackBar.open('Request creation successful!');
      setTimeout(() => {
          this.snackBar.dismiss();
      }, 5000);
  }
    onSubmit(form) {
        const fromDate = new Date(this.fromFormControl.value);
        const toDate = new Date(this.toFormControl.value);
      if (this.titleFormControl.invalid || this.descFormControl.invalid || this.fromFormControl.invalid || this.toFormControl.invalid) {
          this.snackBar.open('All fields are required!');
          setTimeout(() => {
              this.snackBar.dismiss();
          }, 5000);
      } else if(toDate < fromDate) {
          this.snackBar.open('Starting date has to be before ending date');
          setTimeout(() => {
              this.snackBar.dismiss();
          }, 5000);
      } else {
          const newItem = {item_name: this.titleFormControl.value, item_desc: this.descFormControl.value, user_id: this.userService.user.id, borrower: '', date_from: this.transformDate(this.fromFormControl.value), date_to: this.transformDate(this.fromFormControl.value)};
          this.addMarketplaceItem(newItem);
          this.titleFormControl.reset('');
          this.descFormControl.reset('');
          this.fromFormControl.reset('');
          this.toFormControl.reset('');
          form.resetForm();

      }

    }

}
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form.submitted;
        return !!(control && control.invalid && (control.dirty || isSubmitted));
    }
}

