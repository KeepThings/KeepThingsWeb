import { LentOutComponent } from "./lent-out.component";
import { of } from "rxjs";

describe('LendOutComponent', () => {

    let component: LentOutComponent;
    let mockUserItemService;
    let MOCK_ITEMS;
    let mockDialog;

    beforeEach(() => {
        MOCK_ITEMS = [
            {ITEM_ID: 1, ITEM_NAME: 'Laptop', ITEM_DESC: 'Test123', OWNER: 'NightDeath', BORROWER: '', DATE_FROM: '2018-11-10', DATE_TO: '2018-12-02'},
            {ITEM_ID: 2, ITEM_NAME: 'Test', ITEM_DESC: 'Test123', OWNER: 'NightDeath', BORROWER: '', DATE_FROM: '2018-11-10', DATE_TO: '2018-12-02'},
            {ITEM_ID: 3, ITEM_NAME: 'Test123', ITEM_DESC: 'Test123', OWNER: 'NightDeath', BORROWER: '', DATE_FROM: '2018-11-10', DATE_TO: '2018-12-02'}
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
