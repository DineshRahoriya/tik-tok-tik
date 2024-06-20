let boxed = document.querySelectorAll(".box");

let exidbutton = document.getElementById("resetbtn");

let msg = document.getElementById("msg");
let massagecon = document.getElementsByClassName("massage-container");

let new_btn = document.getElementById("new-btn");

let true0 = true;

const wipattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetbuttion = () => {
  let true0 = true;
  enabledbutton();
  
};

boxed.forEach((box) => {
  box.addEventListener("click", () => {
    
    box.disabled = true;
    if (true0) {
      box.innerText = "0";
      true0 = false;
    } else {
      box.innerText = "x";
      true0 = true;
    }
    ClickWinner();
  });
});

const disabledbutton = () => {
  for (let box of boxed) {
    box.disabled = true;
  }

};
const enabledbutton = () => {
  for (let box of boxed) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `congratulations, winner is ${winner}`;

  disabledbutton();
};

const ClickWinner = () => {
  for (winners of wipattern) {
    let pos1value = boxed[winners[0]].innerText;
    let pos2value = boxed[winners[1]].innerText;
    let pos3value = boxed[winners[2]].innerText;

    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value === pos2value && pos2value === pos3value) {
        console.log("winner", pos1value);
        showWinner(pos1value);
      }
    }
  }
};

new_btn.addEventListener("click",resetbuttion)
exidbutton.addEventListener("click",resetbuttion)
