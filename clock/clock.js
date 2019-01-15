function Clock(options) {
	let elem = options.elem;
	generateHTML();

	let timer;

	function generateHTML() {
		let hourElem = document.createElement('span');
		elem.appendChild(hourElem);
		hourElem.className = 'hour';
		hourElem.innerHTML = '00'

		elem.appendChild(document.createTextNode(':'));

		let minElem = document.createElement('span');
		elem.appendChild(minElem);
		minElem.className = 'min';
		minElem.innerHTML = '00'

		elem.appendChild(document.createTextNode(':'));

		let secElem = document.createElement('span');
		elem.appendChild(secElem);
		secElem.className = 'sec';
		secElem.innerHTML = '00'
	}

	function render() {
		let date = new Date();

		let hour = date.getHours();
		let min = date.getMinutes();
		let sec = date.getSeconds();

		elem.querySelector('.hour').innerHTML = hour;
		elem.querySelector('.min').innerHTML = min;
		elem.querySelector('.sec').innerHTML = sec;
	}

	function start() {
		render();
		timer = setInterval(render, 1000);
	}

	function stop() {
		clearInterval(timer);
	}

	this.elem = elem;
	this.start = start;
	this.stop = stop;

}