let list = document.getElementById('list-of-images');
let pos = 0;
let imgListWidth = 300;
let imgQty = 8;
let imgWidth = 90;
let offset = 10;
let vissibleImgQty = 3;
let minPos = -(Math.ceil(imgQty/vissibleImgQty) - 1) * imgListWidth;


(function () {
    for (let i = 1; i <= imgQty; i++) {
        let newNode = document.createElement('li');
        let img = document.createElement('img');
        img.src = `img/pic${i}.jpg`;
        img.style.width = `${imgWidth}px`;
        img.style.height = `${imgWidth}px`;
        newNode.appendChild(img);
        newNode.style.marginRight = `${offset}px`;
        list.appendChild(newNode);
    }
})();
function slideRight () {
    pos = Math.min(pos + imgListWidth, 0);
    list.style.marginLeft = `${pos}px`;
}
function slideLeft () {
    pos = Math.max(pos - imgListWidth, minPos);
    list.style.marginLeft = `${pos}px`;
}

let sliderLeft = document.getElementById('slider-left');
sliderLeft.addEventListener('click', slideLeft);
let sliderRight = document.getElementById('slider-right');
sliderRight.addEventListener('click', slideRight);

