import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher,  MatSnackBar} from '@angular/material';
import {DatePipe} from '@angular/common';
import {MarketplaceService} from '../../marketplace.service';


// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/

@Component({
  selector: 'app-new-request-form',
  templateUrl: './new-request-form.component.html',
  styleUrls: ['./new-request-form.component.css'],
})
export class NewRequestFormComponent implements OnInit {

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
  constructor(private marketplaceService: MarketplaceService, private snackBar: MatSnackBar, private datepipe: DatePipe) { }

  transformDate(date) {
      return this.datepipe.transform(date, 'yyyy-MM-dd');
  }
  ngOnInit() {
  }
    onSubmit() {
      if (this.titleFormControl.invalid || this.descFormControl.invalid || this.fromFormControl.invalid || this.toFormControl.invalid) {
          this.snackBar.open('All fields are required!');
          setTimeout(() => {
              this.snackBar.dismiss();
          }, 5000);
      } else {
          this.marketplaceService.addMarketplaceItem(this.titleFormControl.value, this.descFormControl.value, localStorage.getItem('userID'), this.transformDate(this.fromFormControl.value), this.transformDate(this.toFormControl.value)).subscribe(data => {
              if (data.success) {
                  this.snackBar.open('Request creation successful!');
                  this.titleFormControl.setValue(' ');
                  this.descFormControl.setValue(' ');
                  this.fromFormControl.setValue(' ');
                  this.toFormControl.setValue(' ');
                  setTimeout(() => {
                      this.snackBar.dismiss();
                  }, 5000);
              } else {
                  this.snackBar.open('ERROR inserting Data');
                  setTimeout(() => {
                      this.snackBar.dismiss();
                  }, 5000);
              }
          });
      }

    }

}
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form.submitted;
        return !!(control && control.invalid && (control.dirty || isSubmitted));
    }
}

