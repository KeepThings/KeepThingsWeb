# Software Requirements Specification


## 1. Introduction

### 1.1	Purpose
The purpose of this document is to describe the functionality of the Web-Application and Mobile-Application our team is creating. Both simplify the lending of things to other people by making an entry, that stores all information about it, with just a few clicks.

### 1.2	Scope
The project consists of three main parts. The Web-Application, the Mobile-Application and the API.

The API serves as an interface between the Web-Application/Mobile-Application and the database.

The Web-Application contains a dashboard that shows all things the user lent to others with their respective information. It is also possible to lend new things to others. 

The Mobile-Application has all the features of the Web-Application. Furthermore, in the Mobile-Application the user is able to send a message to the person he lent something.

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

The API can push entries from the applications into an Online-Database and information from the database to the applications. The entries contain all information about the thing that is going to be lend. It can also push a Contact-List from the Mobile-Application into the database, so the Web-Application has access to it.

The Web-Application/Mobile-Application is going to be accessed with a User-Account. It contains the name, email of the user and a password. This account is stored in the database. After the login or registration, the user is able to make new entries to lend things to other people. A dashboard shows the user all information about the things he lent to others. Furthermore, in the Mobile-Application the user is able to import his local Contact-List into the database and send reminders to persons he lent something.

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

### 3.4	Performance
tbd

### 3.5	Supportability
tbd

### 3.6	Design Constraints
tbd

### 3.7	On-line User Documentation and Help System Requirements
tbd

### 3.8	Purchased Components
tbd

### 3.9	Interfaces
tbd

### 3.10 Licensing Requirements
tbd

### 3.11 Legal, Copyright, and Other Notices
tbd

### 3.12 Applicable Standards
tbd


## 4. Supporting Information
tbd
