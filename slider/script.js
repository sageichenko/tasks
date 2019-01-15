class Slider {
	constructor(options) {
		this.elem = this.initElement(options);
		this.initEvents();
	}

	initElement(options) {
		let $slider = document.createElement('div');
		$slider.id = options.id;
		$slider.className = 'slider';

		let $runner = document.createElement('div');
		$runner.className = 'runner';

		$slider.appendChild($runner);

		return $slider;
	}

	initEvents() {
		this.elem.addEventListener('mousedown', (event) => {
			if (!event.target.classList.contains('runner')) {
				return;
			}
			document.body.addEventListener('mousemove', this.moveRunner);
		});

		document.body.addEventListener('mouseup', () => {
			document.body.removeEventListener('mousemove', this.moveRunner);
		});
	} 

	moveRunner(event) {
		let slider = document.getElementById('slider');
		let position = event.clientX;
		//let slider = document.getElementById('slider');
		let coord = slider.getBoundingClientRect();

		let runnerPosition;
		if (position < coord.left) {
			runnerPosition = 0;
		} else if (position > coord.right) {
			runnerPosition = coord.right - coord.left;
		} else {
			runnerPosition = position - coord.left;
		}

		slider.querySelector('.runner').style.left = runnerPosition +'px';

	}
}