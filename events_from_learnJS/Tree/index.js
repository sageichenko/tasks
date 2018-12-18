function openList(event) {
    let target = event.target;

    if (target.tagName !== 'DT'){
        return;
    }

    let parent = target.closest('.list');

    parent.classList.toggle('_open');

    /*if (parent.className.indexOf('_open') === -1) {
        parent.className += ' _open';
        return
    }
    parent.className = parent.className.replace('_open', '');*/
}

tree.addEventListener('click', openList);