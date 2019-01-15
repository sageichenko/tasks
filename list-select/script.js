class ListSelect {
	constructor (options) {
		this.elem = options.elem;
		this.initEvents();

	}

	initEvents() {
		this.elem.addEventListener('click', (event) => {
			let target = event.target;

			if (!target.classList.contains('list__item')) {
				return;
			}

			if (event.ctrlKey) {
				this.select(target);
				return;
			}

			if (event.shiftKey) {
				return;
			}


			[].forEach.call(target.parentNode.querySelectorAll('.list__item'), item => {
				item.classList.remove('_selected');
			});
			
			this.select(target);
		})
	}

	select(elem) {
		elem.classList.toggle('_selected');
	}
}