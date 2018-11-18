Feature: DashboardWeb
  Scenario: User has no lent out items
    When Dashboard has finished loading
    And User has no data in UserItems table in database
    Then Display "You have no lent out items" in the Lent out Widget

  Scenario: No items in Marketplace
    When Dashboard has finished loading
    And No data in MarketplaceItems table in database
    Then Display "There are currently no items on the Marketplace" in the Marketplace Widget

  Scenario: User has lent out items
    When Dashboard has finished loading
    And User has data in User_Items table in database
    Then Display all lent out items in a list in the Lent out Widget

  Scenario: Have items in Marketplace
    When Dashboard has finished loading
    And Data in Marketplace_Items table in database
    Then Display all marketplace items in a list in the Marketplace Widget

    //behave or behat selenium-cucumber
