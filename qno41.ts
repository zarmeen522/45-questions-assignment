// Qno.41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians_name:string[]){
    magicians_name.forEach(name=> console.log(name))
}
let magicians_name:string[]=["David Blaine","Teller","Harry Houdini"]
show_magicians(magicians_name)