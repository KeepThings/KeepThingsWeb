Feature: DashboardMobile

  Scenario: User has no lent out items
    When Dashboard has finished loading
    And User has no data in UserItems table in database
    Then Display "You have no lent out items" in the Lent out Fragment

  Scenario: User has lent out items
    When Dashboard has finished loading
    And User has data in User_Items table in database
    Then Display all lent out items in a list in the Lent out Fragment