const prompt = require('prompt-sync')();


let running = true;

while(running){
    let vowelCount = 0;
    let totalCount = 0;
    let personName = prompt("Please enter a name: ");
    
    for(let letter of personName){
        if( 
        letter == "a" || 
        letter == "e" || 
        letter == "i" || 
        letter == "o" || 
        letter == "u" ||
        letter == "y" || 
        letter == "A" || 
        letter == "E" || 
        letter == "I" || 
        letter == "O" || 
        letter == "U" ||
        letter == "Y" 
        ){
            vowelCount++;
            totalCount++;
        } else if(letter != " ") {
            totalCount ++;
            
        }
            
    } 
        console.log("The name is: " + personName);
        consonantCount = totalCount - vowelCount  ;
        console.log("There are " + vowelCount + " vowel(s)" );
        console.log("There are " + consonantCount + " consonant(s)" );
        console.log("There are total of " + totalCount + " letter(s)" );
        let again = prompt("Thanks for using the letter counter! If you would like to go again please enter y and press enter: ");
        if( again !== "y"){
        running = false;
        }    
} 