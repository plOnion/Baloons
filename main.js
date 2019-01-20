const body = document.querySelector("body");

let result = 0;
let numberBalloons = 10;

const drawBalloons = () =>{
for (let i = 0; i < numberBalloons; i++){
    let height = Math.random() * 100;
    let x = Math.random() * innerWidth;
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
    document.body.appendChild(this["baloon" + i]);
}}

drawBalloons();



