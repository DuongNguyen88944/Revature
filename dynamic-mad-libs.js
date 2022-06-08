const prompt = require('prompt-sync')();

// Menu of Templates
console.log(
`List of Template:
1. ThanksGiving Dinner
2. Road Trip
3. Biography
`)

//Asking what template user want to pick
let storyTemplate = prompt("Please pick a story template using number 1,2 or 3: ");

// Template 1: Thanksgiving Dinner
if (storyTemplate == 1){
   
    let typeOfBird = prompt("Please enter a type of eatable bird: ");
    let aVerbPasttense = prompt("Please enter a verb(past tense): ");
    let sibling1Name = prompt("Please enter a name for sibling 1: ");
    let sibling2Name = prompt("Please enter a name for sibling 2: ")

    console.log(
    `     It was an evening of ThanksGiving day. I woke up from a nap to the delicious smell of ${typeOfBird} roasting 
     in the kitchen downstairs. I ${aVerbPasttense} down the stairs to see if I could help prepare the dinner. 
     My mom said, "Call you sibling, ${sibling1Name} and ${sibling2Name}. Tell them dinner is ready.
    `);
}  

// Template 2: Road Trip
else if (storyTemplate == 2){
    let myName = prompt("Please enter your name: ");
    let cityName1 = prompt("Please enter a name for city 1: ");
    let cityName2 = prompt("Please enter a name for city 2: ");
    let color = prompt("Please enter a color: ");
    let number = prompt("Please enter a number: ");
    let animal = prompt("Please enter an animal: ");
    
    console.log(
    `    My name is ${myName} and I'm on a road trip from ${cityName1} to ${cityName2}. 
    I'm traveling with a friend who likes to eat ${color} marshmallows. My friend keeps 
    asking "Are we ther yet" and I say we still have ${number} hours left. Then I looked
    out my window and to my suprise I saw a ${animal} standing next to a welcome to ${cityName2}
    sign and I yelled out with happiness. We were almost there!
    `)
}   

//Template 3: Biography
else if (storyTemplate == 3){
    let myName = prompt("Please enter your name: ");
    let myCity = prompt("Please enter the name of the city where you were born: ");
    let myColor = prompt("Please enter your color: ");
    let myFood = prompt("Please enter your favorite food: ");
    let myCar = prompt("Please enter your dream car model: ");
    let myVacation = prompt("Please enter your dream vacation place: ");

    console.log(
    `    Hello, my name is ${myName}.
    I was born in ${myCity}.
    My favorite color is ${myColor}.
    My favorite food is ${myFood}.
    My dream car is ${myCar}.
    The place I dream to visit is ${myVacation}.
    `)
}   

// Message when user enter an invalid template number
else {
    console.log("Invalid Story Template");
}