 import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketplaceComponent } from './marketplace.component';
 import {of} from 'rxjs';
 import anything = jasmine.anything;
 import {NgModule} from '@angular/core';
 import { MatIconModule} from '@angular/material';
 import {MatIcon} from '@angular/material';

 describe('MarketplaceComponent', () => {
  let component: MarketplaceComponent;
  let MOCK_ITEMS;
  let mockMarketplaceService;
  let mockDialog;


  beforeEach(() => {
      MOCK_ITEMS = [
          {ITEM_ID: 1, ITEM_NAME: 'Laptop', ITEM_DESC: 'Test123', OWNER: 'NightDeath', BORROWER: '', DATE_FROM: '2018-11-10', DATE_TO: '2018-12-02'},
          {ITEM_ID: 2, ITEM_NAME: 'Test', ITEM_DESC: 'Test123', OWNER: 'NightDeath', BORROWER: '', DATE_FROM: '2018-11-10', DATE_TO: '2018-12-02'},
          {ITEM_ID: 3, ITEM_NAME: 'Test123', ITEM_DESC: 'Test123', OWNER: 'NightDeath', BORROWER: '', DATE_FROM: '2018-11-10', DATE_TO: '2018-12-02'}
      ];
      mockMarketplaceService = jasmine.createSpyObj(['getMarketplaceItems', 'getMarketplaceItem', 'addMarketplaceItem', 'transformDate', 'updateMarketplaceItem']);
      mockDialog = jasmine.createSpyObj(['open']);
      component = new MarketplaceComponent(mockMarketplaceService, mockDialog);
  });

  describe('getMarketplaceItems', () => {
      it('get Marketplace Items', () => {
        mockMarketplaceService.getMarketplaceItems.and.returnValue(of(MOCK_ITEMS))
        component.getMarketplaceItems();
        expect(component.marketplaceItems).toBe(MOCK_ITEMS);
      });
      it('should call getMarketplaceItems()', () => {
        mockMarketplaceService.getMarketplaceItems.and.returnValue(of(MOCK_ITEMS));
        component.getMarketplaceItems();
        expect(mockMarketplaceService.getMarketplaceItems).toHaveBeenCalled();
      });
  });
});
