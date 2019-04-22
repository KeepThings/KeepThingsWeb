
import { NewRequestFormComponent } from "./new-request-form.component";
import { of, from } from "rxjs";
import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { UserItemsService } from "src/app/user-items.service";
import { DatePipe } from '@angular/common';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { NO_ERRORS_SCHEMA } from "@angular/compiler/src/core";
import { FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, FormControlDirective } from '@angular/forms';
import { NgModule } from "@angular/core";
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatInputModule, MatListModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, NativeDateAdapter, MatDialogModule } from '@angular/material';
import { By } from "@angular/platform-browser";

describe('newRequestComponent', () => {
    let fixture: ComponentFixture<NewRequestFormComponent>
    let component: NewRequestFormComponent;
    let mockMarketplaceItemService;
    let date;
    let MOCK_ITEM;
    let snackBar;
    let MOCK_ITEMS;
    beforeEach(() => {

        mockMarketplaceItemService = jasmine.createSpyObj(['addMarketplaceItem']);
        date = jasmine.createSpyObj(['transform']);
        snackBar = jasmine.createSpyObj(['open']);
        TestBed.configureTestingModule({
            declarations: [NewRequestFormComponent],
            providers: [{
                provide: UserItemsService, useValue: mockMarketplaceItemService
            },
            {
                provide: DatePipe, useValue: date
            },
            {
                provide: MatSnackBar, useValue: snackBar
            }],
            imports: [FormsModule, ReactiveFormsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
                MatNativeDateModule, MatSnackBarModule]

        })

        fixture = TestBed.createComponent(NewRequestFormComponent);
        component = fixture.componentInstance;
        MOCK_ITEM =
            { id: 1, item_name: 'Laptop', item_desc: 'Test123', OWNER: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02' };
        MOCK_ITEMS = [
            { id: 1, item_name: 'Laptop', item_desc: 'Test123', OWNER: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02' },
            { id: 2, item_name: 'Test', item_desc: 'Test123', OWNER: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02' },
            { id: 3, item_name: 'Test123', item_desc: 'Test123', OWNER: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02' }
        ];

    })

   /* it('add MarketplaceItem to MarketplaceItem', () => {
        mockMarketplaceItemService.addMarketplaceItem.and.returnValue(of({ 'success': true }));
        fixture.componentInstance.addMarketplaceItem(MOCK_ITEM.item_name, MOCK_ITEM.item_desc, MOCK_ITEM.OWNER, MOCK_ITEM.date_from, MOCK_ITEM.date_to);
        expect(mockMarketplaceItemService.addMarketplaceItem).toHaveBeenCalled();
    }); 

    it('Item has been added to the MarketplaceItem list', () => {
        component.marketplaceItems = MOCK_ITEMS;
        mockMarketplaceItemService.addMarketplaceItem.and.returnValue(of({ 'success': true }));
        fixture.componentInstance.addMarketplaceItem(MOCK_ITEM.item_name, MOCK_ITEM.item_desc, MOCK_ITEM.OWNER, MOCK_ITEM.date_from, MOCK_ITEM.date_to);
        expect(component.marketplaceItems.length).toBe(3);
    }) */
})