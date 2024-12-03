"use strict";
// Qno.31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
Object.defineProperty(exports, "__esModule", { value: true });
let username = ['Saba', 'Rubab', 'Admin', 'Arham', 'Misbah'];
if (username.length === 0) {
    console.log("We need to find some users!.");
}
else {
    username = [];
    console.log("All users have been removed!" + username.length);
}
