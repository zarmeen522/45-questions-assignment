// Q No.3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string = " Misbah shaikh" ;

// IN LOWERCASE:
console.log(personName.toLowerCase());

// IN UPPERCASE:
console.log(personName.toUpperCase());

// IN TITLECASE:
let words : string[ ]= personName.split(" ");
let titlecaseName:string= "";
for(let i=0; i < words.length; i++){
titlecaseName += words[i].charAt(0).toUpperCase() +words [i].slice(i).toLowerCase () +" ";
};
console.log(titlecaseName);
 