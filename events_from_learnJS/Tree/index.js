function openList(event) {
    let target = event.target;

    if (target.tagName !== 'SPAN'){
        return;
    }

    let parent = target.parentElement;

    if (parent.className.indexOf('_open') === -1) {
        parent.className += '_open';
        return
    }
    parent.className = parent.className.replace('_open', '');
}

tree.addEventListener('click', openList);