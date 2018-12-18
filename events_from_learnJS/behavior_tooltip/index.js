function createToolTip (message, coordinates) {
	let toolTip = document.createElement('span');

	toolTip.id = 'tooltip';
	toolTip.innerHTML = message;

	document.body.appendChild(toolTip);

	toolTip.style.position = 'fixed';

	let top = coordinates.top - toolTip.offsetHeight - 3;

	if (top <= 0) {
		top += toolTip.offsetHeight + coordinates.bottom - coordinates.top + 6;
	}

	toolTip.style.top = `${top}px`
	toolTip.style.left = `${coordinates.left}px`;
}

function toggleToolTip (event) {
	let toolTip = document.getElementById('tooltip');

	if (toolTip){
		toolTip.remove();
		return;
	}

	let target = event.target;
	let message = target.getAttribute('data-tooltip');

	if (!message) {
		return;
	}

	let coordinates = target.getBoundingClientRect();

	createToolTip(message, coordinates);
}

document.body.addEventListener('mouseover', toggleToolTip);