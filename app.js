let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#newgame-btn");

let turnO = true; // when true O will be printed {player O}
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    count = 0;
    turnO = true;
    enableBoxes(); 
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count +=1;
        console.log(count);
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
        //console.log(pattern);
        //console.log(pattern[0], pattern[1], pattern[2]);
        //console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val !="") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                msg.innerHTML = `Congratulations! Winner is ${pos1Val}`;
                msgContainer.classList.remove("hide");
                resetBtn.disabled = true;
                disableBoxes();
            } else if(count == 9) {
                msg.innerHTML = "Oops! The match is draw.";
                msgContainer.classList.remove("hide");
                resetBtn.disabled = true;
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);