export class MarketplaceItem {
    ITEM_ID: number;
    ITEM_NAME: string;
    ITEM_DESC: string;
    USER_ID: number;
    BORROWER: string;
    DATE_FROM: string;
    DATE_TO: string;


    constructor(ITEM_ID, ITEM_NAME, ITEM_DESC, OWNER, BORROWER, DATE_FROM, DATE_TO) {
        this.ITEM_ID = ITEM_ID;
        this.ITEM_NAME = ITEM_NAME;
        this.ITEM_DESC = ITEM_DESC;
        this.USER_ID = OWNER;
        this.BORROWER = BORROWER;
        this.DATE_FROM = DATE_FROM;
        this.DATE_TO = DATE_TO;
    }
}
