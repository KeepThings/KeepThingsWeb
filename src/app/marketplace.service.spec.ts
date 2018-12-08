import { TestBed } from '@angular/core/testing';

import { MarketplaceService } from './marketplace.service';
import {of} from 'rxjs';

describe('MarketplaceService', () => {
  let service: MarketplaceService;
  let mockHttpService;
  let date;
  let MOCK_ITEMS;

  beforeEach(() => {
    MOCK_ITEMS = [
      {ITEM_ID: 1, ITEM_NAME: 'Laptop', ITEM_DESC: 'Test123', OWNER: 'NightDeath', BORROWER: '', DATE_FROM: '2018-11-10', DATE_TO: '2018-12-02'},
      {ITEM_ID: 2, ITEM_NAME: 'Test', ITEM_DESC: 'Test123', OWNER: 'NightDeath', BORROWER: '', DATE_FROM: '2018-11-10', DATE_TO: '2018-12-02'},
      {ITEM_ID: 3, ITEM_NAME: 'Test123', ITEM_DESC: 'Test123', OWNER: 'NightDeath', BORROWER: '', DATE_FROM: '2018-11-10', DATE_TO: '2018-12-02'}
  ];
    mockHttpService = jasmine.createSpyObj(['get']);
    date = jasmine.createSpyObj(['transform']);
    service = new MarketplaceService(mockHttpService,date);

  });
  it('should get all Marketplace Items', () => {
    mockHttpService.get.and.returnValue(of(MOCK_ITEMS));
    service.marketplaceItems = MOCK_ITEMS;
    expect(service.marketplaceItems).toBe(MOCK_ITEMS);
  });

  it('should get Marketplace Item', () => {
    mockHttpService.get.and.returnValue(of(MOCK_ITEMS[0]));
    service.marketplaceItem = MOCK_ITEMS[0];
    service.getMarketplaceItem(0);
    expect(service.marketplaceItem).toBe(MOCK_ITEMS[0]);
  })
});
