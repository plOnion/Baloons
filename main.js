const wrapper = document.querySelector(".wrapper");
const game = document.querySelector(".game");
const resultTable = document.querySelector(".result");

game.style.height = `${innerHeight}px`;

let result = 0;
let numberBalloons = 10;

resultTable.innerText = `RESULT
${result}`;

const drawBalloons = () =>{
    for (let i = 0; i < numberBalloons; i++){
        let height = (Math.random() * 75) + 10;
        let x = (Math.random() * innerWidth) * 0.75;
        let y = innerHeight;
        let colors = ["black", "greenyellow", "hotpink", "aqua", "darkorange", "red", "blue", "green", "gray", "violet"];
        let color = Math.floor(Math.random() * 10);

        this["baloon" + i] = document.createElement("div");
        this["baloon" + i].classList.add("baloon");
        this["baloon" + i].style.left = `${x}px`;
        this["baloon" + i].style.backgroundColor = colors[color];
        this["baloon" + i].style.top = `${y}px`;
        this["baloon" + i].style.height = `${height}px`;
        this["baloon" + i].style.width = `${height/1.4}px`;
        game.appendChild(this["baloon" + i]);

        let dy = Math.random() * 10;

        let fly = setInterval(() => {
            this["baloon" + i].style.left = `${x}px`;
            this["baloon" + i].style.top = `${y -= dy}px`;
            if(y < 20){
                game.removeChild(this["baloon" + i]);
                clearInterval(fly);
            }
        }, 50);
}}

drawBalloons();

const baloonArray = document.querySelectorAll(".baloon");

const boomBaloon = (e) => {
    resultTable.innerText = `RESULT
    ${++result}`;
    e.target.remove();
};

baloonArray.forEach((elem) => {
    elem.addEventListener("click", boomBaloon);
});



