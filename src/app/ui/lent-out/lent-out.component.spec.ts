import { LentOutComponent } from "./lent-out.component";
import { of } from "rxjs";

describe('LendOutComponent', () => {

    let component: LentOutComponent;
    let mockUserItemService;
    let MOCK_ITEMS;
    let mockDialog;

    beforeEach(() => {
        MOCK_ITEMS = [
            {id: 1, item_name: 'Laptop', item_desc: 'Test123', OWNER: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02'},
            {id: 2, item_name: 'Test', item_desc: 'Test123', OWNER: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02'},
            {id: 3, item_name: 'Test123', item_desc: 'Test123', OWNER: 'NightDeath', borrower: '', date_from: '2018-11-10', date_to: '2018-12-02'}
        ];
        mockUserItemService = jasmine.createSpyObj(['getUserItems', 'getUserItem', 'addUserItem', 'updateUserItem']);
        mockDialog = jasmine.createSpyObj(['open']);
        component = new LentOutComponent(mockUserItemService, mockDialog);

    });
    
    describe('get UserItems', () =>{
        it('get All UserItems', () => {
            mockUserItemService.getUserItems.and.returnValue(of(MOCK_ITEMS));
            component.getUserItems();
            expect(component.userItems).toBe(MOCK_ITEMS);
        });
        it('should call getUserItems()', () => {
            mockUserItemService.getUserItems.and.returnValue(of(MOCK_ITEMS));
            component.getUserItems();
            expect(mockUserItemService.getUserItems).toHaveBeenCalled();
        })
    });

    


})
