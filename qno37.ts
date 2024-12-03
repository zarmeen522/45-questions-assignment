// Qno.37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_Shirt(size:string="Large", messageit:string= "I Love Typescript !"){
    console.log(`You ordered T-Shirt with the "${size}" size and a message "${messageit}" on it.`)
}

make_Shirt()
make_Shirt("Medium")
make_Shirt("Small", "Choose LIFE :)");
