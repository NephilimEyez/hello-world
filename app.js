'use strict'

function getName() {
    const userName = prompt ("Hi, what's your name?", "Dave");
    return userName;
}

function greetUser() {
    if (theirName == null || undefined) {
        let tempName = prompt ("Are you sure you don't want a more personalized experience?");
        if (tempName == null || undefined) {
            document.write('<span>Hello,</span> <span id="noInput">Dave.</span>'); 
        } else {
            document.write('Hello, ' + tempName + '.');
        }
             
    } else { 
        document.write("Hello, " + theirName + ".");
    }
}

function star() {
    let raiting = prompt ("How many stars betwee 1-5 would you rate my site.")
    if (raiting > 5) {
        raiting = 5;
    } else if (raiting <= 0){ 
        document.write('<img src="images/sadface.jpg" alt="sad face">');
    } else {
    }
    for (let i = raiting; i > 0; i--) {
        document.write('<img src="https://cdn.cnn.com/cnnnext/dam/assets/220106111824-red-supergiant-star-supernova-small-11.jpg" alt="Nasa Image">')
    }
}

let theirName = getName();