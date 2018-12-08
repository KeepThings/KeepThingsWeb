import { UserItemsService } from "./user-items.service";
import {of} from 'rxjs';

describe('userItems Service', () =>{
    let service: UserItemsService;
    let mockHttpService;
    let date;
    let MOCK_ITEMS;

    beforeEach(() =>{
        MOCK_ITEMS = [
            {ITEM_ID: 1, ITEM_NAME: 'Laptop', ITEM_DESC: 'Test123', OWNER: 'NightDeath', BORROWER: '', DATE_FROM: '2018-11-10', DATE_TO: '2018-12-02'},
            {ITEM_ID: 2, ITEM_NAME: 'Test', ITEM_DESC: 'Test123', OWNER: 'NightDeath', BORROWER: '', DATE_FROM: '2018-11-10', DATE_TO: '2018-12-02'},
            {ITEM_ID: 3, ITEM_NAME: 'Test123', ITEM_DESC: 'Test123', OWNER: 'NightDeath', BORROWER: '', DATE_FROM: '2018-11-10', DATE_TO: '2018-12-02'}
        ];
        mockHttpService = jasmine.createSpyObj(['get']);
        date = jasmine.createSpyObj(['transform']);

        service = new UserItemsService(mockHttpService, date);

    })
    it('should get all userItems', () =>{
        mockHttpService.get.and.returnValue(of(MOCK_ITEMS));
        service.userItems = MOCK_ITEMS;
        service.getUserItems(2);
        expect(service.userItems).toBe(MOCK_ITEMS);
    })
});