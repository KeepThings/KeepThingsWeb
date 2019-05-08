import { UserItemsService } from "./user-items.service";
import {of} from 'rxjs';

describe('userItems Service', () =>{
    let service: UserItemsService;
    let mockHttpService;
    let date;
    let MOCK_ITEMS;

    /*beforeEach(() =>{
        MOCK_ITEMS = [
            {id: 1, item_name: 'Laptop', item_desc: 'Test123', OWNER: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02'},
            {id: 2, item_name: 'Test', item_desc: 'Test123', OWNER: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02'},
            {id: 3, item_name: 'Test123', item_desc: 'Test123', OWNER: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02'}
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
    }) */
});