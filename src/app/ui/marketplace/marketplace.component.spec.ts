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
  let mockAuthService;
  let mockUserService
/*
  beforeEach(() => {
      MOCK_ITEMS = [
          {id: 1, item_name: 'Laptop', item_desc: 'Test123', OWNER: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02'},
          {id: 2, item_name: 'Test', item_desc: 'Test123', OWNER: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02'},
          {id: 3, item_name: 'Test123', item_desc: 'Test123', OWNER: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02'}
      ];
      mockMarketplaceService = jasmine.createSpyObj(['getMarketplaceItems', 'getMarketplaceItem', 'addMarketplaceItem', 'transformDate', 'updateMarketplaceItem']);
      mockDialog = jasmine.createSpyObj(['open']);
      mockAuthService = jasmine.createSpyObj([]);
      mockUserService = jasmine.createSpyObj(['getUserById', 'addUser', 'removeUser', 'getUser', 'getSpecificUser', 'getUsers']);
      component = new MarketplaceComponent(mockMarketplaceService, mockDialog, mockUserService, mockAuthService);
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
  }); */
});
