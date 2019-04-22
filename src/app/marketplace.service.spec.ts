import { TestBed } from '@angular/core/testing';

import { MarketplaceService } from './marketplace.service';
import {of} from 'rxjs';

describe('The MarketplaceService', () => {
  let service: MarketplaceService;
  let mockHttpService;
  let date;
  let MOCK_ITEMS;

  beforeEach(() => {
    MOCK_ITEMS = [
      {id: 1, item_name: 'Laptop', item_desc: 'Test123', id: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02'},
      {id: 2, item_name: 'Test', item_desc: 'Test123', id: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02'},
      {id: 3, item_name: 'Test123', item_desc: 'Test123', id: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02'}
  ];
    mockHttpService = jasmine.createSpyObj(['get']);
    date = jasmine.createSpyObj(['transform']);
    service = new MarketplaceService(mockHttpService);

  });
  it('should get all Marketplace Items', () => {
    mockHttpService.get.and.returnValue(of(MOCK_ITEMS));
    service.marketplaceItems = MOCK_ITEMS;
    expect(service.marketplaceItems).toBe(MOCK_ITEMS);
  });

  it('should get Marketplace Item', () => {
    mockHttpService.get.and.returnValue(of(MOCK_ITEMS[0]));
    service.marketplaceItem = MOCK_ITEMS[0];
    service.getMarketplaceItemById(0);
    expect(service.marketplaceItem).toBe(MOCK_ITEMS[0]);
  });



});
