"use strict";
// Q No.3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = " Misbah shaikh";
// IN LOWERCASE:
console.log(personName.toLowerCase());
// IN UPPERCASE:
console.log(personName.toUpperCase());
// IN TITLECASE:
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(i).toLowerCase() + " ";
}
;
console.log(titlecaseName);
