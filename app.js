class TypingList {
	constructor(element, list, waiting, speed) {
		this.element = element;
		this.list = list;
		this.waiting = waiting;
		this.speed = speed;

		this.i = 0;
	}

	typo(element, text, speed) {
		text += "."
		let i = 1;
		let typing = setInterval(() => {
			element.innerText = text.slice(0, i);
	
			i++;
	
			if (i > text.length) {
				setTimeout(() => this.erase(element, text, speed), 1000);
				clearInterval(typing);
			}
		}, speed);
	}
	
	erase(element, text, speed) {
		let i = 1;
	
	
		let typing = setInterval(() => {
			element.innerText = text.slice(0, -i);

			i++;
			
			if (i > text.length) {
				setTimeout(() => this.typeLoop(), this.waiting);
				clearInterval(typing);
			}
		}, speed);
	}

	typeLoop() {
		if (this.i >= this.list.length) {
			this.i = 0;
		}

		let current = this.list[this.i];
		
		this.typo(this.element, current, this.speed);

		this.i++;
	}

}

window.onload = () => {
	const interested = [
		'programming',
		'swimming',
		'science',
		'optimizing',
		'clean code',
		'learning English',
		'design',
		'photograph',
		'listening music',
		'to slove algorithm problem',
	];
	
	const interestedSpan = document.getElementById('interested');
	const nameElement = document.getElementById('name');
	const typeSpeed = 100;

	const type = new TypingList(interestedSpan, interested, 1000, typeSpeed);

	type.typeLoop();
	
	nameElement.addEventListener('mouseover', () => {
		nameElement.innerText = "hooss_only";
	});

	nameElement.addEventListener('mouseleave', () => {
		nameElement.innerText = "Changmin Jung";
	});

	nameElement.addEventListener('mousedown', () => {
		const eggList = [
			'Hi!',
			'Auch!',
			'LOL',
			'Patrick',
			'i use arch btw'
		];

		const randomIndex = Math.floor(Math.random() * (eggList.length));
		nameElement.innerText = eggList[randomIndex];
	});
};
