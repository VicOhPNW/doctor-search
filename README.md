# Doctor Search

##### JavaScript with API exercise By Victoria O., Epicodus - October 12, 2018

## *Description*
_Doctor Search_ is a simple application that allows a user to enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in the Seattle area who can treat their medical issue.

This is an exercise to apply and test our understanding of JavaScript unit week 2 lessons. Primary Objectives:
* Does the application correctly use webpack?
* Did you follow all setup instructions, including storing your API key?
* Does the app separate user interface and business logic functionalities into different JavaScript files?
* Does the application correctly make an API call?
* Does the application correctly parse data from the API response?
* Does the application handle errors when the API call doesn't return a 200 OK status as well as return a message if the API returns no results?
* Code and Git documentation follow best practices (setup instructions in README, .gitignore file discluding unnecessary content from repo, detailed well-formatted commit messages, etc.)
* Project demonstrates understanding of week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

## *Specifications*
* A user should be able to enter a medical issue to receive a list of doctors in the Seattle area that fit the search query.
* A user should be able to to enter a name to receive a list of doctors in the Seattle area that fit the search query.
* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## *Known Bugs & Issues*
* Some doctors have the same address listed multiple times.

## *Setup/Installation Requirements*

1. Clone this repository by using Terminal command:
```
    $ git clone https://github.com/VicOhPNW/doctor-search.git
```
2. Them within the project folder, run the following commands:
```
    $ npm install
```
```
    $ npm run start
```

## *Support and contact details*
Contact: Victoria, ohvictori@gmail.com

## *Technologies Used*
* JavaScript
* HTML
* [Better Doctor API](https://developer.betterdoctor.com/)

#### *Copyright* (c) 2018 Victoria Oh, Epicodus
