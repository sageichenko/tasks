function showImage (event) {
    event.preventDefault();
    let mainImg = document.getElementById('main-img');
    let target = event.target;

    while (target !== this) {
        if (target.tagName === 'A') {
            mainImg.src = target.href;
        }

        target = target.parentNode;
    }
}

let imgs = gallery.getElementsByClassName('preview-img');
for (img of imgs) {
    img.src = img.parentNode.href;
}

gallery.addEventListener('click', showImage);