import { NewEntryFormComponent } from "./new-entry-form.component";
import { of, from } from "rxjs";
import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { UserItemsService } from "src/app/user-items.service";
import {DatePipe} from '@angular/common';
import {ErrorStateMatcher, MatSnackBar} from '@angular/material';
import { NO_ERRORS_SCHEMA } from "@angular/compiler/src/core";
import {FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {FormsModule, ReactiveFormsModule, FormControlDirective} from '@angular/forms';
import { NgModule } from "@angular/core";
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatInputModule, MatListModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, NativeDateAdapter, MatDialogModule } from '@angular/material';
import { By } from "@angular/platform-browser";

describe('newEntryComponent', () => {
    let fixture: ComponentFixture<NewEntryFormComponent>
    let component: NewEntryFormComponent;
    let mockUserItemService;
    let date;
    let MOCK_ITEM;
    let snackBar;
    /*
    beforeEach(()=> {
        mockUserItemService = jasmine.createSpyObj(['addUserItem', 'setUpdate']);
        date = jasmine.createSpyObj(['transform']);
        snackBar = jasmine.createSpyObj(['open']);
        TestBed.configureTestingModule({
            declarations: [NewEntryFormComponent],
            providers: [{
                provide: UserItemsService, useValue: mockUserItemService
                },
                {
                provide: DatePipe, useValue: date
                },
                {
                provide: MatSnackBar, useValue: snackBar
                }],
            imports: [FormsModule, ReactiveFormsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
                MatNativeDateModule,MatSnackBarModule] 
            
        })
        fixture = TestBed.createComponent(NewEntryFormComponent);
        component = fixture.componentInstance;
        MOCK_ITEM = 
        {id: 1, item_name: 'Laptop', item_desc: 'Test123', OWNER: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02'};
        

    })

    it('add UserItem to UserItems', () => {
        mockUserItemService.addUserItem.and.returnValue(of({'success': true}));
        fixture.componentInstance.addUserItem(MOCK_ITEM.item_name, MOCK_ITEM.item_desc, MOCK_ITEM.OWNER, MOCK_ITEM.borrower, MOCK_ITEM.date_from, MOCK_ITEM.date_to);
        expect(mockUserItemService.addUserItem).toHaveBeenCalled();
    });

    it('click button "create Entry"', async(() =>{
        spyOn(component, 'onSubmit');
        let button = fixture.debugElement.nativeElement.querySelector('button');
        button.click();
        fixture.whenStable().then(() => {
            expect(component.onSubmit).toHaveBeenCalled();
          })
        
    }));
    */

});