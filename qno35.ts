// Qno.35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let Animals:string[]=["Sheep","Camel","Cow"]
for(let pet_animals of Animals){
    console.log(`A ${pet_animals} can be a good source of diary products.`)
};
console.log("These animals are considered as Diary animals, as we humans usually obtain milk from them.\nAlso these are herbivores animals.")