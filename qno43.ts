// Qno.43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_Magician(magicians_name:string[]){
    magicians_name.forEach(name=> console.log(name))
}
function make_Great(magicians_name:string[]){
    return magicians_name.map(name => `The Great ${name}!`)
}
let magician_Name:string[]=["David Blaine","Teller","Harry Houdini"]

let copy_magician_Name= magician_Name.slice()
let copy_great_magician = make_Great(copy_magician_Name)
console.log("ORIGINAL ARRAY!\n");
show_Magician(magician_Name)
console.log("\nCOPIED ARRAY!\n");
show_Magician(copy_great_magician);
