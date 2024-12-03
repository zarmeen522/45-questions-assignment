"use strict";
// Qno.41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians_name) {
    magicians_name.forEach(name => console.log(name));
}
let magicians_name = ["David Blaine", "Teller", "Harry Houdini"];
show_magicians(magicians_name);
