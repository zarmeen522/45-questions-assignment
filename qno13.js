"use strict";
// Qno.13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
Object.defineProperty(exports, "__esModule", { value: true });
// TRANSPORT:
let transport_vehicles = [`Car`, `Motorbike`, `Aeroplane`, `Rail`, `Bus`
];
for (let i = 0; i < transport_vehicles.length; i++) {
    console.log(`Hey! I would like to own a`, transport_vehicles[i], `.`);
}
