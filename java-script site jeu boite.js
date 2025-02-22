console.log("démmarage du programme"); 

let intervalID;
let play = true; 
let time = 10; 
let score = 0; 
let Bestscore = localStorage.getItem("Bestscore"); 
let timerEl = document.querySelector('#timer'); 
timerEl.innerHTML = time; 

let BestscoreEl = document.querySelector('#Bestscore'); 
BestscoreEl.innerHTML = Bestscore !== null ? Bestscore : 0; 

let scoreEl = document.querySelector('#score'); 
scoreEl.innerHTML = score; 

let boxEl = document.querySelector('#box'); 
boxEl.addEventListener('click', () => {
    if (play) {
        console.log('on a cliqué')
        score = score + 1; 
        scoreEl.innerHTML = score; 
        boxEl.style.left = (Math.floor(Math.random() * (window.innerWidth - 100))) + "px";
        boxEl.style.top = (Math.floor(Math.random() * (window.innerHeight - 100))) + "px";
    }
});

function updateTimer() {
    console.log('setInterval'); 
    if (time != 0) {
        time = time - 1; 
        timerEl.innerHTML = time; 
    } 
    else {
        play = false; 
        if (Bestscore === null || score > Bestscore) {
            console.log('mise à jour')
            localStorage.setItem("Bestscore", score); 
            Bestscore = score; 
            BestscoreEl.innerHTML = score; 
        }
        clearInterval(intervalID);
    }
}

function startTimer() {
    intervalID = setInterval(updateTimer, 1000);}

startTimer();




