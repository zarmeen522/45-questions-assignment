"use strict";
// Q No.6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
Object.defineProperty(exports, "__esModule", { value: true });
let personName1 = `\n\t Zarmeen Sheikh \t\n`;
console.log(personName1);
let stripped = personName1.trim();
console.log(stripped);
