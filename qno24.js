"use strict";
// Qno.24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array/
Object.defineProperty(exports, "__esModule", { value: true });
// CONDITIONAL TESTS:....
// Equality and Inequality... with strings
// For FALSE:
let Airline_name = "Airblue";
console.log("is Airline name == 'AirSial'? I predict True!");
console.log(Airline_name == " AirSial");
// For TRUE:
let my_favourite_food = "pizza";
console.log("is my Favourite food == 'Burger'? I predict False!");
console.log(my_favourite_food != "Burger");
// LOWER CASE FUNCTION:
// for FALSE//
console.log("is Airline_name.tolowercase() == 'Airblue' ? I predict True!");
console.log(Airline_name.toLowerCase() == "Airblue");
// for TRUE//
console.log("is my_favourite_food.tolowercase() == 'pizza' ? I predict True!");
console.log(my_favourite_food.toLowerCase() == "pizza");
//NUMERIC TESTS:
let her_income = 35499;
let her_age = 27;
let her_overall_costs = 27800;
let her_savings = 7699;
// FOR EQUALITY AND INEQUALITY TEST:
// for false://
console.log(" is her_income =='35399'? I predict True!");
console.log(her_income == 35399);
// For true://
console.log("is her_income !='35500'? I predict True! ");
console.log(her_income != 35500);
// GREATER THAN AND LESS THAN:
// For true:
console.log("is her_savings > '6900'? I predict True!");
console.log(her_savings > 7000);
// for false:
console.log("is her_overall_costs < '27000' ? I predict True!");
console.log(her_overall_costs < 27000);
// GREATER THAN OR EQUAL TO & LESS THAN OR EQUAL TO:
// For true:
console.log("is her_age >= '27' ? I predict True!");
console.log(her_age >= 27);
// For false:
console.log("is her_age <= '30' ? I predict False! ");
console.log(her_age <= 30);
//TESTS using AND & OR:
let my_friends = "Rubab";
let not_my_friend = "Fatima";
// for false:
console.log("is my_friend == 'fatima' and 'Rubab' ? I predict False!");
console.log(my_friends != 'Rubab' && 'Fatima');
// for true:
console.log("is my_friend == 'fatima' and 'Rubab' ? I predict True!");
console.log(my_friends == 'Rubab' || 'Fatima');
// TEST to check whether an item is IN AN array or NOT:
let number1 = [26, 17, 47, 85, 29, 72, 93];
console.log("is '25' in number1? I predict True!");
console.log(25 in number1);
console.log("is '78' in number1? I predict True!");
console.log(78 in number1);
