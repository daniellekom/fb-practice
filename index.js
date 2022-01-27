//shift up arrow to select w out curly brace 
//then option shift down arrow it will copy it all down 
//created 4 restaurants easier this way
//from restaurants.json folder



// 1) import our restaurants how do u import? require ('./')
//then go to beginning of line and add variable const restaurants =

const restaurants = require('./restaurants.json');
// console.log(restaurants[0].name) then delete to check if it runs from .json

// 2)import a set of library tools from google(firebase library) to talk to firebase and Firestore
const { initializeApp, applicationDefault, cert} = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue} = require('firebase-admin/firestore');

// use npm by terminal npm init -y for yes to get package.json
// then in terminal npm install firebase-admin and node_modules will appear on left with(x amount of packages)
// then create a file .gitignore outside of node_module and inside node_modules
//then go on firebase and go to ur project settings(jeremiahs notes)
//download the private key and then drag it to ur vscode and rename it to credntials.json and add it to ur gitignore file
//so ur private key is now public (if u want it to be public)


// 3) connect to Firestore ("./")= means my own file
const credntials = require("./credentials.json")


// 4) create a collection called "restaurants"


// 5) add each restaurant