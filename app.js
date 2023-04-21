'use strict'

function getName() {
    const userName = prompt ("Hi, what's your name?", "Dave");
    return userName;
}

function greetUser() {
    if (theirName == null || undefined) {
        let tempName = prompt ("Are you sure you don't want a more personalized experience?");
        if (tempName == null || undefined) {
            document.write('Hello, <p id="noInput">Dave.</p>'); 
        } else {
            console.log("not working")
            document.write("Hello, " + tempName + ".");
        }
             
    } else { 
        document.write("Hello, " + theirName + ".");
    }
}

let theirName = getName();