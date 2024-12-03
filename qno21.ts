// Qno.21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item{
    name:string
    price:number
    membership: any
}

// OBJECTS!!!!..
const Fast_food: item ={
    name:"Pizza",
     price: 3000,
     membership: 5
};

const Desi_food :item={
    name:"Nihari",
    price: 450,
    membership: 2 

};
console.log(` Desi_food name: ${Desi_food.name},\n Desi_food membership: ${Desi_food.membership},\n Desi_food Price: $${Desi_food.price}\n `);
console.log(` Fast_food name: ${Fast_food.name},\n Fast_food membership: ${Fast_food.membership},\n Fast_food Price: $${Fast_food.price}\n `);