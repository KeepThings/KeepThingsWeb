# Software Requirements Specification


## 1. Introduction

### 1.1	Purpose
The purpose of this document is to describe the functionality of the Web-Application our team is creating. It simplifys the lending of things to other people by making an entry, that stores all information about it, with just a few clicks.

### 1.2	Scope
The project consists of two main parts. The Web-Application and the API.

The API serves as an interface between the Web-Application and the database.

The Web-Application contains a dashboard that shows all things the user lent to others with their respective information. It is also possible to lend new things to others. 

### 1.3	Definitions, Acronyms, and Abbreviations
|Term|Definition|	
|:-:|:-:|
|SRS|	Software Requirements Specification|
|UC|	Use Case|

### 1.4	References
|Name|Link|
|:-----:|:------------------:|
|Blog|https://keepthingsnlb.wordpress.com/|
|Git|https://github.com/KeepThings |

### 1.5	Overview
The following chapters gives an overall description about our vision of the project.


## 2. Overall Description
The idea of KeepThings is to lend things as fast and easy as possible to other people. The user will be able to do this with just a few clicks. He will also be able to keep track of all things he lent.

The API can push entries from the applications into an Online-Database and information from the database to the applications. The entries contain all information about the thing that is going to be lend.

The Web-Application is going to be accessed with a User-Account. It contains the email of the user, the name and a password. This account is stored in the database. After the login or registration, the user is able to make new entries to lend things to other people. A dashboard shows the user all information about the things he lent to others.

![Alt-Text](/recources/UCD-KeepThings.svg)


## 3. Specific Requirements
### 3.1	Functionality
This section lists our use cases and elaborates their functionality in the App.

#### 3.1.1 User-oriented
##### 3.1.1.1 webRegister
A new user is able to create a new account by using his email, a passwort and an username. The UCS can be found [here](https://github.com/KeepThings/KeepThingsWeb/blob/master/recources/UseCases/webRegistration/webRegistrationUCS.md).
##### 3.1.1.2 webLogin
Already registered users are able to login by using their email and password. The UCS can be found [here](https://github.com/KeepThings/KeepThingsWeb/blob/master/recources/UseCases/webLogin/webLoginUCS.md).
##### 3.1.1.3 webUserSettings
The logged-in user is able to change his username. The UCS can be found [here](https://github.com/KeepThings/KeepThingsWeb/blob/master/recources/UseCases/webUserSettings/webUserSettingsUCS.md).

#### 3.1.2 General
##### 3.1.2.1 webMarketplace
All looged-in users can see all marketplaceitems in a list. If they are intessted in the item they can contact the owner of the item. The owner of the marktplaceitem can lent it to another person. The UCS can be found [here](https://github.com/KeepThings/KeepThingsWeb/blob/master/recources/UseCases/webMarketplace/webMarketplaceUCS.md).
##### 3.1.2.2 webUserItem
All logged-in users can see all of their lent out items. They can see all details regarding the item. The UCS can be found [here](https://github.com/KeepThings/KeepThingsWeb/blob/master/recources/UseCases/webUserItems/webUserItemsUCS.md).
##### 3.1.2.3 webNewUserItem
All looged-in users can create a new item that they lent out to another person. The UCS can be found [here](https://github.com/KeepThings/KeepThingsWeb/blob/master/recources/UseCases/webNewUserItem/webNewUserItemUCS.md).
##### 3.1.2.4 webNewRequest
All logged-in users can create a new marketplaceitem that they want to lent out to someone. The UCS can be found [here](https://github.com/KeepThings/KeepThingsWeb/tree/master/recources/UseCases/webNewRequest).
##### 3.1.2.5 webMessage
All logged-in users can create chats with other users where they can write messages to each other. The UCS can be found [here](https://github.com/KeepThings/KeepThingsWeb/blob/master/recources/UseCases/webMessages/webMessagesUCS.md).

### 3.2	Usability 
#### 3.2.1 Easy to use
The application should be easy and fast to use and easy to understand. An easy to use application will allow the user to quickly manage all off his lend out items or add new ones.

### 3.3	Reliability
#### 3.3.1 Stable Application
The application should be bugfree and there should no crashes or frezzes to allow a reliable usage.
#### 3.3.1	Availability
The application and the server it's running on should have 99% uptime to make sure the users can always use the application.

### 3.4 Performance
#### 3.4.1 Smooth working interface
The interface should provide a smooth experience for the user. There should be little to no waiting time when fragments are opend or closed.
#### 3.4.2 Short server response time
To provide the smooth interface experience it's requires that the  server has a short response times. After adding a new marketplaceitem it should "instantly" be added to the 
### 3.5	Supportability
#### 3.5.1 Code
Code just follow conventions for the respective language (e.g. camel case for C#). Functions and variables should have self explanatory names.
#### 3.5.2	Git Commits
For smaller changes or hotfixes the commit message should be short and self explaining. For commits that are connected to a Usecase or a task the commit message should be following the following syntax:

|Action|	Commit message (#ID format)|	Commit message (id:ID format)|
|:-:|:-:|:-:|
|Change states|	#ID state:fixed|	id:ID state:fixed|
|Add comments|	#ID comment: text of your comment here| id:ID comment: text of your comment here|
|Add time spent|	#ID time:1|	id:ID time:1|
|Add time spent and time remaining|	#ID time:4:8|	id:ID time:4:8|
|Update several entities at a time|	#ID, #ID comment: will not be fixed state:invalid time:0.5|	id:ID, id:ID comment: will not be fixed state:invalid time:0.5|
|All the actions in one commit message|	#456, #887 state:done time:3:0 comment:whoa! Everything is completed!|	id:456, id:887 state:done time:3:0 comment:whoa! Everything is completed!

### 3.6	Design Constraints
#### 3.6.1	GitHub
GitHub for version control.
#### 3.6.2	TargetProcess
TargetProcess as an agile management tool.
#### 3.6.3 MySQL
MySQL as our single database.
#### 3.6.4 MVC
The App services are implemented using MVC architecture.

### 3.7	On-line User Documentation and Help System Requirements
n/a

### 3.8	Purchased Components
n/a

### 3.9	Interfaces
#### 3.9.1 User Interfaces
##### 3.9.1.1 Lend out
The Lend out component shows all the items a user has lend out to someone. He will be able to see the Name of the Item, to who he lend it out and the beginning and end date of the. By clicking on an item, a popup will appear where the user can see all the detailed information. 
These information are:
- Item Name
- Item Description
- Owner of the Item
- Borrower of the Item
- Date From
- Date To

The user is able to edit everything except for the owner and to delete items.
##### 3.9.1.2 Marketplace
The Marketplace component shows all the items which are currently on the Marketpalce. By clicking on an item a popup will open where the user can see all the detailed information. 
These information are:
- Item Name
- Item Description
- Owner of the Item
- Borrower of the Item
- Date From
- Date To

The user is able to edit everything except for the owner of the item if he/she is the owner of the item. If the user is the owner of the item he can also delete it. If a borrower for the item is added, it will automatically convert to the Lend-out list of the user and will be removed from the Marketplace. Otherwise the user can only see the information. 
He is also able to message the owner of the item by clicking on the "Message this Person" button, which will open the new Message component.

##### 3.9.1.3 New Message
In the new Message component the user is able to write a Message to the owner of the item. He is able to choose a topic and a message.

##### 3.9.1.4 Messages
In the Messages component the user is able to select a chat on the left side which will load the messages of the chat on the right side. Under the messages on the right side there is an input field where the user can enter a new message.

##### 3.9.1.5 New Entry
In the new Entry component the user is able to enter the information for a new Item which he wants to lend out. The infomation required are:
- Item Name
- Item Description
- Borrower of the Item
- Date From
- Date To

The Date From has to be before or the same as Date To.

##### 3.9.1.6 New Request
In the new Request component the user is able to make a new Marketplace registration by adding a new Item to the Marketplace. The required infromation for the input form are:
- Item Name
- Item Description
- Date From
- Date To

The Date From has to be before or the same as Date To.

##### 3.9.1.7 User Settings
In the User Settings component the user is able to edit his/her username.

#### 3.9.2 Hardware Interfaces
n/a
#### 3.9.3 Software Interfaces
n/a
#### 3.9.4 Communications Interfaces
A connection to the server must be available in order to read and write information to the database.

### 3.10 Licensing Requirements
n/a

### 3.11 Legal, Copyright, and Other Notices
n/a

### 3.12 Applicable Standards
n/a

## 4. Supporting Information
n/a
