class Timer {
	constructor(colors, startRef, stopRef) {
		this.intervalId = null;
		this.isActive = false;
		this.colors = colors = [
			"#FFFFFF",
			"#2196F3",
			"#4CAF50",
			"#FF9800",
			"#009688",
			"#795548",
		];
		this.startRef = startRef = document
			.querySelector("[data-action='start']")
			.addEventListener("click", () => {
				timer.start();
			});
		this.stopRef = stopRef = document
			.querySelector("[data-action='stop']")
			.addEventListener("click", () => {
				timer.stop();
			});
	}
	start() {
		if (this.isActive) return;

		const startTime = Date.now();
		this.isActive = true;
		this.intervalId = setInterval(() => {
			const currentTime = Date.now();
			const deltaTime = currentTime - startTime;

			this.changeColor(this.colors);
			this.randomIntegerFromInterval();

			console.log(deltaTime);
		}, 1000);
	}
	stop() {
		clearInterval(this.intervalId);
		this.isActive = false;
	}
	changeColor(colors) {
		const color = colors[this.randomIntegerFromInterval(0, colors.length)];
		document.body.style.backgroundColor = color;
	}
	randomIntegerFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}

const timer = new Timer();
