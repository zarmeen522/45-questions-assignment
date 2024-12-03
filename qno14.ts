// Qno.14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let Guest_list:string[]=["Fahad","Arham","M.Shees","Abbas","Ayesha"]
for(let i=0; i< Guest_list.length;i++){
    console.log(`Dear `+ Guest_list[i],`,\n\n Kindly join us for an evening filled with delicious foods, drinks and great company.\n Dont miss out!.
        \n\n Thank You!\n`)
};

export{Guest_list};

// QUESTION NO 15.....!!
let not_coming:string="Abbas";
let new_Guest:string="Rubab";
Guest_list[3]=new_Guest
// for(let i=0; i< Guest_list.length;i++){
//     console.log(`Dear `+ Guest_list[i],`,\n\n Kindly join us for an evening filled with delicious foods, drinks and great company.\n Dont miss out!.
//         \n\n Thank You!\n`)
//     };
//     console.log(`Mr.${not_coming},is unfortunately missing our Dinner's Party.`)

//     // QUESTION NO:16....!!!
Guest_list.unshift("Misbah Shaikh");
Guest_list.splice(3,0,"Muqadas Gul");
Guest_list.push("Zarmeen Sheikh");

// for (let i=0; i< Guest_list.length;i++){
//     console.log(`Hey, Dear `+  Guest_list[i] +`! \n\n I just found a bigger table, and I want you to eagerly join a distinguished evening of dilicious Dinner Party at our place.\n\nThank You!\n\n`)
// };

// QUESTION NO 17!!!!.....
// console.log("Unfortunately, we can only invite two people for Dinner party.\nThank you!\n");
// while(Guest_list.length>2){
//     let removed_guests=Guest_list.pop();
//     console.log("Dear",`${removed_guests}`,",we are sorry to say that we can only invite two people at our place :( .")
// };
// for (let i=0; i< Guest_list.length;i++){
//     console.log(`Hey, Dear `+  Guest_list[i] +`! \n\n You are still invited for tommorrows Dinner party :) . \n Thank You! \n\n`)
// };
 
// Guest_list.splice(0,2);
// console.log(Guest_list);

