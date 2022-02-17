var letter = document.getElementById("letter");
let answer = "atone";
var rowLetters = document.getElementById("row-letters");
var displayOnEnter = document.getElementById("frame");
var identifyOnPress = document.getElementById("frame");
const rowBoxes = [document.getElementById("box1"), document.getElementById("box2"), document.getElementById("box3"), document.getElementById("box4"), document.getElementById("box5")];
let shouldBeBrown = true;

displayOnEnter = function() {
    var isReserved = new Array(5).fill(false);
    for (let i = 0; i <= 4; i ++) {
        if (rowLetters.innerText.substring(i, i + 1) === answer.substring(i, i + 1)) {
            rowBoxes[i].style.backgroundColor = "green";
            rowBoxes[i].style.borderColor = "green";
            isReserved[i] = true;
        }
        else {
            for (let j = 0; j <= 4; j ++) {
                if (rowLetters.innerText.substring(i, i + 1) === answer.substring(j, j + 1) && !isReserved[j]) {
                    rowBoxes[i].style.backgroundColor = "yellow";
                    rowBoxes[i].style.borderColor = "yellow";
                    isReserved[j] = true;
                    shouldBeBrown = false;
                }
                else continue;
            }
            if (shouldBeBrown) {
                rowBoxes[i].style.backgroundColor = "brown";
                rowBoxes[i].style.borderColor = "brown";
            }
            else continue;
        }
    }
}

const acceptedInputs = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "Enter", "Backspace"]
identifyOnPress = function(event) {
    letter = event.key;
    let count = 0;
    for (let i = 0; i < acceptedInputs.length; i ++) {
        if (acceptedInputs[i] === letter) {
            if (letter !== "Enter" && letter !== "Backspace") {
                rowLetters.innerText.substring(count, count + 1) = letter; //possibly very wrong
                rowLetters.style.color = "white";
                count ++;
            }
            else if (letter === "Backspace" && count !== 0) {
                document.getElementById("row-letters").innerText.substring(count, count + 1) = "";
                count --;
            }
            else displayOnEnter;
        }
        else continue;
    }
}

document.addEventListener('keypress', identifyOnPress);