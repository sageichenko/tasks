function Voter (options) {
	this.elem = options.elem;

	let vote = 0;//Number.parseInt(this.elem.querySelector('.vote').innerHTML);

	this.elem.addEventListener('click', (event) => {
		let target = event.target;
		if (target.classList.contains('down')) {
			vote--;
		} else if (target.classList.contains('up')) {
			vote++;
		}

		target.parentNode.querySelector('.vote').innerHTML = vote; 

	})
}