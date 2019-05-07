# Test Plan
## 1.	Introduction
### 1.1	Purpose
The purpose of the Iteration Test Plan is to gather all of the information necessary to plan and control the test effort for a given iteration. It describes the approach to testing the software, and is the top-level plan generated and used by managers to direct the test effort.
This Test Plan for KeepThings supports the following objectives:
-	Identifies the items that should be targeted by the tests.
-	Identifies the motivation for and ideas behind the test areas to be covered.
-	Outlines the testing approach that will be used.
-	Identifies the required resources and provides an estimate of the test efforts.
### 1.2	Scope
This test plan cover tests for the whole application. This includes frontend, backend and the communication with the server.
-	Unit Testing
-	Integration Testing
-	End-to-end Testing
### 1.3	Intended Audience
The intended audience of this test plan are the developers themselves. This document is on a technical level, so it is for more advanced readers who need the necessary background knowledge.
### 1.4	Document Terminology and Acronyms
|Abbr|Abbreviation|
|-|-|
|UI|User Interface|
|n/a|not applicable|
|tbd|to be done|
### 1.5	 References
| Title                                                                   | Date       | Publishing organization   |
| ------------------------------------------------------------------------|:----------:| ------------------------- |
| [Blog](https://keepthingsnlb.wordpress.com)                          | Oct. 2018  | KeepThings                 |
| [GitHub Repository](https://github.com/KeepThings/)        | Oct. 2018  | KeepThings                 |
| [UC1 mobileAddFriends](./UseCases/mobileAddFriends/mobileAddFriendsUCS.md)               | Apr. 2019  | KeepThings                 |
| [UC2 mobileLogin](./UseCases/mobileLogin/mobileLoginUCS.md)               | Oct. 2018  | KeepThings                 |
| [UC3 mobileMarketplace](./UseCases/mobileMarketplace/mobileMarketplaceUCS.md)            | Oct. 2018  | KeepThings                 |
| [UC4 mobileNewUserItem](./UseCases/mobileNewUserItem/mobileNewUserItemUCS.md)             | Oct. 2018  | KeepThings                 |
| [UC5 mobileRegistration](./UseCases/mobileRegistration/mobileRegistrationUCS.md)                                  | Oct. 2018  | KeepThings                 |
| [UC6 mobileUserItems](./UseCases/mobileUserItems/mobileUserItemsUCS.md)                                | Oct. 2018  | KeepThings                 |
| [UC7 mobileUserSettings](./UseCases/mobileUserSettings/mobileUserSettingsUCS.md) | Apr. 2019  | KeepThings                 |
| [UC8 webAddFriends](./UseCases/webAddFriends/webAddFriendsUCS.md)              | Apr. 2019  | KeepThings                 |
| [UC9 webLogin](./UseCases/webLogin/webLoginUCS.md)              | Oct. 2018  | KeepThings                 |
| [UC10 webMarketplace](./UseCases/webMarketplace/webMarketplaceUCS.md)          | Apr. 2019  | KeepThings                 |
| [UC11 webMessages](./UseCases/webMessages/webMessagesUCS.md)          | Apr. 2019  | KeepThings                 |
| [UC12 webNewRequest](./UseCases/webNewRequest/webNewRequestUCS.md)          | Oct. 2018  | KeepThings                 |
| [UC13 webNewUserItem](./UseCases/webNewUserItem/webNewUserItemUCS.md)          | Oct. 2018  | KeepThings                 |
| [UC14 webRegistration](./UseCases/webRegistration/webRegistrationUCS.md)          | Oct. 2018  | KeepThings                 |
| [UC15 webUserItems](./UseCases/webUserItems/webUserItemsUCS.md)          | Oct. 2018  | KeepThings                 |
| [UC16 webUserSettings](./UseCases/webUserSettings/webUserSettingsUCS.md)          | Apr. 2019  | KeepThings                 |
| [Test Plan](./TestPlan.md)                                              | Apr. 2019  | KeepThings                 |
| [SRS](./SoftwareRequirementSpecifications.md)                          | Oct. 2018  | KeepThings                 |
| [SAD](./SoftwareArchitectureDocument/SoftwareArchitectureDocument.md)                               | Oct. 2018  | KeepThings                 |
## 2.	Evaluation Mission and Test Motivation
### 2.1	Background
Testing our application helps us ensure that changes to the application's source-code will not result in errors or any other malfunctions in our application. By integrating these tests into our deployment process, we make sure that only working versions of our project are getting deployed to end-users.
### 2.2	Evaluation Mission
Testing is one of the most important points of developing. It has to be guaranteed at all times that all the code is working especially before you publish the 
### 2.3	Test Motivators
The tests are done to ensure quality and mitigate risks and fulfill functional requirements. Their purpose is to provide stability for our application.
## 3.	Target Test Items
The listing below identifies those test items software, hardware, and supporting product elements that have been identified as targets for testing. This list represents what items will be tested.
-	Android Backend
-	Angular Backend
## 4.	Outline of Planned Tests
### 4.1	Outline of Test Inclusions
Front End: 
-	User Interface testing of views/fragments

Backend: 
-	Unit testing
### 4.2	Outline of Other Candidates for Potential Inclusion
n/a
### 4.3	Outline of Test Exclusions
Because of time and resource constraints we will not do:
-	Stress test
-	Load/performance tests
-	Usability tests
-	any further tests

## 5.	Test Approach
### 5.1	Testing Techniques and Types
#### 5.1.1 Unit Testing

Unit testing ensures, that the tested sourcecode works as expected. Therefore small parts of the sourcecode are tested independently.

|                       | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
|Technique Objective    | Ensure that the implemented code works as expected                  |
|Technique              | Implement test methods using JUnit Framework (Frontend & Backend)   |
|Oracles                | Test execution logs results to the command line, logs in CI/CD Tool (Travis) |
|Required Tools         | JUnit 4 & 5 Dependencies in Frontend and Backend                    |
|Success Criteria       | All tests pass.                                                     |
|Special Considerations | -                                                                   |

#### 5.1.2 User Interface Testing

By UI testing the application is tested from the perspective of the user. The goal of UI testing is to ensure that the UI behaves as expected.

|                       | Description                                                          |
|-----------------------|----------------------------------------------------------------------|
|Technique Objective    | Test application automated from the perspective of the user through UI Test |
|Technique              | Writing Gherkin `.feature` files with clearly defined steps and the expected result. The test implementation of the steps use the Android Espresso library to serve the emulator.|
|Oracles                | Expect that the steps of the test are executed successfully and the UI behaves as planned.|
|Required Tools         | Dependencies of Cucumber and Espresso (official Android UI test library) and an Implementation of a test runner based on JUnit 4 to execute UI tests with Cucumber and Espresso.|
|Success Criteria       | All UI tests pass.|
|Special Considerations | - |

## 6.	Entry and Exit Criteria
### 6.1	Test Plan
#### 6.1.1	Test Plan Entry Criteria
n/a
#### 6.1.2	Test Plan Exit Criteria
n/a
## 7.	Deliverables
### 7.1	Test Evaluation Summaries
tbd
### 7.2	Reporting on Test Coverage
tbd
### 7.3	Perceived Quality Reports
tbd
### 7.4	Incident Logs and Change Requests
tbd
## 8.	Testing Workflow
tbd
## 9.	Environmental Needs
### 9.1	Base System Hardware
tbd
### 9.2	Base Software Elements in the Test Environment
tbd
### 9.3	Productivity and Support Tools
tbd
## 10.	Responsibilities, Staffing, and Training Needs
### 10.1	People and Roles

| Role          | Person Assigned |  Specific Responsibilities or Comments |
|---------------|--------------|----------------------------------------|
| Test Manager | Nils | Provides management oversight. |
| Test Designer | Nils, Lukas, Benedikt | Defines the technical approach to the implementation of the test effort. |
| Test System Administrator | Nils | Ensures test environment and assets are managed and maintained. |

### 10.2	Staffing and Training Needs
n/a

## 11.	Iteration Milestones
Our goal is to get 42% code coverage.		

## 12.	Risks, Dependencies, Assumptions, and Constraints
[List any risks that may affect the successful execution of this Test Plan, and identify mitigation and contingency strategies for each risk. Also indicate a relative ranking for both the likelihood of occurrence and the impact if the risk is realized.]

| Risk | Mitigation Strategy | Contingency (Risk is realized) |
|------|---------------------|--------------------------------|
| Code has lots of side effects | Refactor code (Clean Code principles) | publish new refactored tests |
| Test Runner is not able to execute tests | Use standard libraries which include working Test Runner | fix test execution configuration |
| Test data proves to be inadequate | Rewiev test data | Revise the test data |

## 13.	Management Process and Procedures
n/a

