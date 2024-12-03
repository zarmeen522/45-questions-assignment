// Qno.44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function Sandwiches(...items:string[]){
    console.log("Making a sandwich with these ingredients:\n ");
    items.forEach(Item=>
        console.log(Item)
    )
    console.log("Have a Delicious sandwich!\n\t");
}
console.log("Classic Chicken Club Sandwich :")
Sandwiches("Bread","lettuse","Onion","Roast chiken breast","Tomato","Mayonnaise","Picles")
console.log("Veg Mayo Grilled Sandwich : ");
Sandwiches("Bread","Butter","salt","Pepper","Carrot","Bell pepper","Cabbage","Mayonnaise")
console.log("Boiled Egg Sandwich :");
Sandwiches("Bread","Butter","Boiled Eggs","salt","pepper")