function showToolTip (event) {
	let target = event.target;
	let message = target.getAttribute('data-tooltip');
	if (!message) {
		return;
	}

	let toolTip = document.createElement('span');
	toolTip.id = 'tooltip';
	toolTip.innerHTML = message;	

	document.body.appendChild(toolTip);

	toolTip.style.position = 'fixed';

	let coord = target.getBoundingClientRect();

	let top = coord.top - toolTip.offsetHeight - 3;
	if (top <= 0) {
		top += toolTip.offsetHeight + coord.bottom - coord.top + 6;
	}

	toolTip.style.top = `${top}px`
	toolTip.style.left = `${coord.left}px`;

}

function hideToolTip (event){
	document.getElementById('tooltip').remove();
}

document.body.addEventListener('mouseover', showToolTip);
document.body.addEventListener('mouseout', hideToolTip);