import {Component, Directive, Inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, NgControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher2} from '../new-entry-form/new-entry-form.component';
import {MarketplaceItem} from '../../marketplace-item';
import {MAT_DIALOG_DATA, MatDialog, MatSnackBar} from '@angular/material';
import {MarketplaceService} from '../../marketplace.service';
import {UserService} from '../../user.service';
import {User} from '../../user';
import {MarketplaceComponent} from '../marketplace/marketplace.component';
import {HandlerService} from '../../handler.service';
import {AuthenticationService} from '../../authentication.service';
import {NewMessageComponent} from '../newMessage/new-message.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-m-idetails',
  templateUrl: './m-idetails.component.html',
  styleUrls: ['./m-idetails.component.css']
})
export class MIDetailsComponent implements OnInit {
    owner = false;
    matcher = new MyErrorStateMatcher2();
    marketplaceItem: MarketplaceItem;
    username: User;
    user: User;
    titleFormControl = new FormControl({value: '', disabled: true}, Validators.required);
    descFormControl = new FormControl({value: '', disabled: true}, Validators.required);
    ownerFormControl = new FormControl({value: '', disabled: true}, Validators.required);
    borrowerFormControl = new FormControl({value: '' , disabled: true}, Validators.required);
    fromFormControl = new FormControl({value: '', disabled: true}, Validators.required);
    toFormControl = new FormControl({value: '' , disabled: true}, Validators.required);


    constructor(@Inject(MAT_DIALOG_DATA) private data: any, private marketplaceService: MarketplaceService,
                private snackBar: MatSnackBar, private userService: UserService, private handler: HandlerService, private auth: AuthenticationService, private dialog: MatDialog, private datepipe: DatePipe) { }

  ngOnInit() {
      this.getMarketplaceItem(this.data.id);



  }

    transformDate(date) {
        return this.datepipe.transform(date, 'yyyy-MM-dd');
    }


    getMarketplaceItem(id): void {
        this.marketplaceService.getMarketplaceItemById(id).subscribe(marketplaceItem => {
                this.marketplaceItem = marketplaceItem;
                this.titleFormControl.setValue(this.marketplaceItem.item_name);
                this.descFormControl.setValue(this.marketplaceItem.item_desc);
                this.borrowerFormControl.setValue(this.marketplaceItem.borrower);
                this.fromFormControl.setValue(this.marketplaceItem.date_from);
                this.toFormControl.setValue(this.marketplaceItem.date_to);
                this.getUsername();
            }
        );
    }

    getUsername() {

        this.userService.getSpecificUser(this.marketplaceItem.user_id).subscribe(res => {
            this.user = res;
            this.ownerFormControl.setValue(this.user.username);
            this.checkOwnership();
        });
    }



    checkOwnership() {
            if (this.userService.user && this.marketplaceItem) {
                if (this.userService.user.id === this.marketplaceItem.user_id) {
                    this.owner = true;
                    this.titleFormControl.enable();
                    this.descFormControl.enable();
                    this.borrowerFormControl.enable();
                    this.fromFormControl.enable();
                    this.toFormControl.enable();
                } else {
                    this.owner = false;
                    this.titleFormControl.disable();
                    this.descFormControl.disable();
                    this.borrowerFormControl.disable();
                    this.fromFormControl.disable();
                    this.toFormControl.disable();
                }
            }
    }

    onSubmit() {
        this.checkOwnership();
        if (!this.owner) {
            this.dialog.open(NewMessageComponent, {data: {user_id: this.marketplaceItem.user_id}});
        } else {
            if (true) {
                this.marketplaceService.updateMarketplaceItem({id: this.marketplaceItem.id, item_name: this.titleFormControl.value, item_desc: this.descFormControl.value, user_id: this.user.id, borrower: this.borrowerFormControl.value, date_from: this.transformDate(this.fromFormControl.value), date_to: this.transformDate(this.toFormControl.value)}).subscribe(res => {if (res.status === 200 ) {
                    this.snackBar.open('Marketplace Item update successful!');
                    setTimeout(() => {
                        this.snackBar.dismiss();
                    }, 5000);
                } else {
                    this.snackBar.open('Error updating Marketplace Item!');
                    setTimeout(() => {
                        this.snackBar.dismiss();
                    }, 5000);
                }});


            } else {
                this.snackBar.open('Start date has to be earlier than end date!');
                setTimeout(() => {
                    this.snackBar.dismiss();
                }, 3000);
            }
        }



    }
}

