const wrapper = document.querySelector(".wrapper");
const game = document.querySelector(".game");
const resultTable = document.querySelector(".result");

game.style.height = `${innerHeight}px`;

console.log(innerHeight);

let result = 0;
let numberBalloons = 10;

const drawBalloons = () =>{
for (let i = 0; i < numberBalloons; i++){
    let height = Math.random() * 100;
    let x = (Math.random() * innerWidth) * 0.8;
    let y = 1;
    let colors = ["black", "greenyellow", "hotpink", "aqua", "darkorange", "red", "blue", "green", "gray", "violet"];
    let color = Math.floor(Math.random() * 10);

    this["baloon" + i] = document.createElement("div");
    this["baloon" + i].classList.add("baloon");
    this["baloon" + i].style.left = `${x}px`;
    this["baloon" + i].style.backgroundColor = colors[color];
    this["baloon" + i].style.bottom = `${y}px`;
    this["baloon" + i].style.height = `${height}px`
    this["baloon" + i].style.width = `${height/2}px`
    game.appendChild(this["baloon" + i]);
}}

drawBalloons();

// let x = Math.random() * 10;
// let y = 1;
// let dy = Math.random() * 100;

// const fly = () =>{
//     baloon.style.left = x + "px";
//     baloon.style.bottom = `${y += dy}px`;
// }

// setInterval(fly, 500);
const baloonArray = document.querySelectorAll(".baloon");

resultTable.innerText = `RESULT
${result}`;

const boomBaloon = (e) => {
    resultTable.innerText = `RESULT
${++result}`;
    e.target.remove();
};

baloonArray.forEach((elem) => {
    elem.addEventListener("click", boomBaloon);
});

// const resultUpdate = () =>{
//
// }



