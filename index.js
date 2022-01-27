//shift up arrow to select w out curly brace 
//then option shift down arrow it will copy it all down 
//created 4 restaurants easier this way
//restaurants.json folder



//import our restaurants how do u import? require ('./')
//then go to beginning of line and add variable const restaurants =

const restaurants = require('./restaurants.json');
//check if it works by running first restaurant 
console.log(restaurants[0].name)



//connect to Firestore

//create a collection called "restaurants"

//add each restaurant