import { LentOutComponent } from './lent-out.component';
import { of } from 'rxjs';
import {UserService} from '../../user.service';
import {User} from '../../user';
import {UserItemsService} from '../../user-items.service';

describe('The LendOutComponent', () => {

    let component: LentOutComponent;
    let mockUserItemService;
    let MOCK_ITEMS;
    let mockDialog;
    let mockAuthService;
    let mockUserService;
    let MOCK_USER: User;

    beforeEach(() => {

        MOCK_ITEMS = [
            {id: 1, item_name: 'Laptop', item_desc: 'Test123', user_id: 1, borrower: 'Pleb1', date_from: '2018-11-10', date_to: '2018-12-02'},
            {id: 2, item_name: 'Test', item_desc: 'Test123', user_id: 1, borrower: 'Pleb2', date_from: '2018-11-10', date_to: '2018-12-02'},
            {id: 3, item_name: 'Test123', item_desc: 'Test123', user_id: 1, borrower: 'Pleb3', date_from: '2018-11-10', date_to: '2018-12-02'}
        ];

        MOCK_USER = {id: 1, auth0_id: 'auth0|1', name: 'User', first_name: 'Test', password: '12345', email: 'test@test.de', tel_nr: 123, username: 'TestUser', type: 'User', verified: true};
        mockUserItemService = jasmine.createSpyObj(['getUserItems', 'getUserItem', 'addUserItem', 'updateUserItem', 'removeUserItem']);
        mockDialog = jasmine.createSpyObj(['open']);
        mockAuthService = jasmine.createSpyObj(['login', 'handleLoginCallback', 'getAccessToken', 'getUserInfo', 'logout']);
        mockUserService = jasmine.createSpyObj(['getUserById', 'addUser', 'removeUser', 'getUser', 'getSpecificUser', 'getUsers']);
        component = new LentOutComponent(mockUserItemService, mockDialog, mockUserService, mockAuthService);

    });

    /*it('should have been called', () => {
        spy = spyOn(component, 'getUserItems');
        mockUserItemService.getUserItems();
        expect(mockUserItemService.getUserItems).toHaveBeenCalled();
    }); */
    describe('has the Function getUserItems which', () => {

        it('should have been called', () => {
            mockUserItemService.getUserItems.and.returnValue(of(MOCK_ITEMS));
            component.getUserItems();
            expect(mockUserItemService.getUserItems).toHaveBeenCalled();
        });
        it('should return an array of UserItems', () => {
            mockUserItemService.getUserItems.and.returnValue(of(MOCK_ITEMS));
            component.getUserItems();
            expect(component.userItems).toBe(MOCK_ITEMS);
        });
    });

    describe('has the Function  getUser which', () => {
        it('should have been called', () => {
            mockUserService.getUserById('auth0|1').and.returnValue(of(MOCK_USER));
            component.getUser();
            expect(mockUserService.getUserById).toHaveBeenCalled();
        });
        it('should return the correct user with the requested auth0 id',  () => {
            mockUserService.getUserById('auth0|1').and.returnValue(of(MOCK_USER));
            component.getUser();
            expect(mockUserService.getUserById).toBe(MOCK_USER);
            expect(MOCK_USER.auth0_id).toBe('auth0|1');
        });
    });

    describe('has the Function removeUser which', () => {
        it('should removes the parsed UserItem from the List of UserItems', function () {
            mockUserItemService.getUserItems.and.returnValue(of(MOCK_ITEMS));
            component.getUserItems();
            expect(component.userItems.length).toBe(3);
            component.removeItem(MOCK_ITEMS[1]);
            expect(component.userItems.length).toBe(2);
        });
    });




});
