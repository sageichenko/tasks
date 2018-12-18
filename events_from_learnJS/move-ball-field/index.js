let ball = document.createElement('img');
let ballSize = 100;

ball.src = 'img/ball.png';
ball.style.height = `${ballSize}px`;
ball.style.width = `${ballSize}px`;
ball.style.position = 'absolute';
ball.style.top = '0px';
ball.style.left = '0px';
ball.id = 'ball';

field.appendChild(ball);

let widthBord = (field.offsetWidth - field.clientWidth)/2;
let leftFrame = field.offsetLeft + widthBord;
let rightFrame = field.offsetWidth - widthBord + leftFrame;
let topFrame = field.offsetTop + widthBord;
let bottomFrame = field.offsetHeight - widthBord + topFrame;



let minPosX = 0;
let maxPosX = rightFrame - leftFrame - ballSize - widthBord;
let minPosY = 0;
let maxPosY = bottomFrame - topFrame - ballSize - widthBord;

console.log(minPosY);

function moveBall (event) {
    let posY = event.clientY - topFrame - ballSize/2;
    let posX = event.clientX - leftFrame - ballSize/2;
    ball.style.top = `${Math.min(maxPosY, Math.max(posY, minPosY))}px`;
    ball.style.left = `${Math.min(maxPosX, Math.max(posX, minPosX))}px`;
}

field.addEventListener('click', moveBall);
