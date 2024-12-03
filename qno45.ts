// Qno.45
// Cars:Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored corrected.
interface car{
    manufacturer: string;
    model: string;
    [key: string]: any;
}
function create_car(manufacturer: string, model: string, ...options:any[]):  car{
    let car: car={
        manufacturer: manufacturer,
        model: model
    };

    options.forEach( option => {
        let [key,value] = option.split(":")
        car[key.trim()] =value.trim()
    })
    return car;
};
let car= create_car("Toyota","Corolla","Color:Black","year: 2022",
    "Number_of_forward_Gears:1","Number_of_Air_Bags:6")
console.log(car);