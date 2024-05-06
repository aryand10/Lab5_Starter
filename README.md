# Lab 5 - CSE 110
Lab completed by:
Aryan Desai


## Expose 
Expose Wesbite: [Here](https://aryand10.github.io/Lab5_Starter/expose.html)

## Explore - Part 1
Explore Website: [Here](https://aryand10.github.io/Lab5_Starter/explore.html)

## Explore - Part 2 & 3 

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would not use a unit test to test the "message" feature of a messaging application. The aspect of "messaging" involves several components from the UI, the database, the network, and any other supporting pieces of code to assist a feature like this. Since unit testing is meant for more small scale debugging and does not test how several components like this interact with each other, it would not be an effective form of testing for a "message" feature like this. 

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

I would use a unit test to test the "max message length" feature of a messaging application. This type of test involves testing a specific and isolated function in the application. Thus, a unit test could be developed to verify that inputs for messages are not allowed to exceed the max lenght of 80 characters. 
