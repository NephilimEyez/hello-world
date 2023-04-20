'use strict'

function getName() {
    const userName = prompt ("Hi, what's your name?", "Dave");
    return userName;
}

function greetUser(theirName) {
    if (theirName === undefined) {
        document.write("Hello, Dave.");        
    } else {
        document.write("Hello, " + theirName + ".");
    }
}
