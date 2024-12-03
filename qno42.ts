// Qno.42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magician(magicians_name:string[]){
    magicians_name.forEach(name=> console.log(name))
}
function make_great(magicians_name:string[]){
    return magicians_name.map(name => `The Great ${name}!`)
}
let magician_name:string[]=["David Blaine","Teller","Harry Houdini"]
let great_magicians=make_great(magician_name)
show_magician(great_magicians);