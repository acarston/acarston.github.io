var letter1 = document.getElementById("letter1");
var letter2 = document.getElementById("letter2");
var letter3 = document.getElementById("letter3");
var letter4 = document.getElementById("letter4");
var letter5 = document.getElementById("letter5");
var letter = document.getElementById("letter");
let count = 1;
let answer = "atone";

var displayOnEnter = function() {
    count = 1;
    if (letter1 === answer.substring(0, 1)) {
        document.getElementById("box1").style.backgroundColor = "green";
        document.getElementById("box1").style.borderColor = "green";
    }
    else {
        let temp = 0;
        for (let i = 0; i <= 4; i ++) {
            if (letter1 === answer.substring(i, i + 1) && temp === 0) {
                document.getElementById("box1").style.backgroundColor = "yellow";
                document.getElementById("box1").style.borderColor = "yellow";
                temp ++;
            }
        }
    }

    if (letter2 === answer.substring(1, 2)) { //repeating letters become a problem
        document.getElementById("box2").style.backgroundColor = "green";
        document.getElementById("box2").style.borderColor = "green";
    }
    else {
        let temp = 0;
        for (let i = 0; i <= 4; i ++) {
            if (letter2 === answer.substring(i, i + 1) && temp === 0) {
                document.getElementById("box2").style.backgroundColor = "yellow";
                document.getElementById("box2").style.borderColor = "yellow";
                temp ++;
            }
        }
    }

    if (letter3 === answer.substring(2, 3)) {
        document.getElementById("box3").style.backgroundColor = "green";
        document.getElementById("box3").style.borderColor = "green";
    }
    else {
        let temp = 0;
        for (let i = 0; i <= 4; i ++) {
            if (letter3 === answer.substring(i, i + 1) && temp === 0) {
                document.getElementById("box3").style.backgroundColor = "yellow";
                document.getElementById("box3").style.borderColor = "yellow";
                temp ++;
            }
        }
    }

    if (letter4 === answer.substring(3, 4)) {
        document.getElementById("box4").style.backgroundColor = "green";
        document.getElementById("box4").style.borderColor = "green";
    }
    else {
        let temp = 0;
        for (let i = 0; i <= 4; i ++) {
            if (letter4 === answer.substring(i, i + 1) && temp === 0) {
                document.getElementById("box4").style.backgroundColor = "yellow";
                document.getElementById("box4").style.borderColor = "yellow";
                temp ++;
            }
        }
    }

    if (letter5 === answer.substring(4, 5)) {
        document.getElementById("box5").style.backgroundColor = "green";
        document.getElementById("box5").style.borderColor = "green";
    }
    else {
        let temp = 0;
        for (let i = 0; i <= 4; i ++) {
            if (letter5 === answer.substring(i, i + 1) && temp === 0) {
                document.getElementById("box5").style.backgroundColor = "yellow";
                document.getElementById("box5").style.borderColor = "yellow";
                temp ++;
            }
        }
    }
}

    for (let i = 0; i <= 5; i ++) {
        
    }

var identifyOnPress = function(event) {
    letter = event.key;
    if (letter === "q" || "w" || "e" || "r" || "t" || "y" || "u" || "i" || "o" || "p" || "a" || "s" || "d" || "f" || "g" || "h" || "j" || "k" || "l" || "z" || "x" || "c" || "v" || "b" || "n" || "m" || "Enter") {
        if (count === 1) {
            letter1 = letter;
            document.getElementById("box1-letter").innerHTML(letter) 
        if (count === 2) {
            letter2 = letter;
            document.getElementById("box2-letter").innerHTML(letter)
        if (count === 3) {
            letter3 = letter;
            document.getElementById("box3-letter").innerHTML(letter)
        if (count === 4) {
            letter4 = letter;
            document.getElementById("box4-letter").innerHTML(letter)
        if (count === 5) {
            letter5 = letter;
            document.getElementById("box5-letter").innerHTML(letter) //needs styling
        if (count === 6 && letter === "Enter") displayOnEnter;
        count ++; //needs backspace condition
    }
}


document.addEventListener('keypress', identifyOnPress);