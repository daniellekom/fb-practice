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
//you do this bc u want ur database to be private- walkys user sensitive info. but code can still be pushedto git hub 
//just not database aka sensitive info
//in github there wont be a credentials.json file



// 3) import our credentials ("./")= means my own file "PRIVATE KEY"
const credentials = require("./credentials.json")


// 3) connect to Firebase services "passing my certificate"/ we add the cridential key
initializeApp({
    credential: cert(credentials)

})

//connect to firestore
const db = getFirestore();


//create a variable for db.collection('restaurants)
const restaurantReferance = db.collection('restaurants') 



// 5) add each restaurant in .catch do err to see if there is error  
// we do [0] [1] then [2] then [3]

restaurantReferance.add(restaurants[3])
.then(doc =>{
    console.log('Added restaurant', doc.id);
})
.catch(err=>{console.error(err);
});

// 4) get a single document and do .then and .err to catch err
// use method doc.id to get id but if we want the data inside the file we add doc.data as well
//the long number/letter code is from firebase when u uploaded ur restaurant file

restaurantReferance.doc('FWI1CCPI1kZSPIn4QF2j' ).get()
.then(doc =>{
    console.log(doc.id, ' => ',doc.data());
})
.catch(err=>console.error(err));

// get all documents
//shortcut to err=>cosnole.error(err) is just console.error
// forEach in snapshot.foreach() to get info about restaurants foreach

restaurantReferance.get()
.then(snapshot => {
   snapshot.forEach(doc=>{
    console.log(doc.id, '=>', doc.data());
   })
})
.catch(console.error);

// find a document(s)
//go into the restaurant collection and get the restaurant info for bolay
//im filtering w where and then im getting

restaurantReferance.where('name','==','Bolay').get()
.then(snapshot => {
snapshot.forEach(doc =>{
    console.log(doc.data());
});

})
.catch(console.error);
