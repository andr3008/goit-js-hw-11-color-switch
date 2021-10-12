const colors = [
	"#FFFFFF",
	"#2196F3",
	"#4CAF50",
	"#FF9800",
	"#009688",
	"#795548",
];
const startRef = document.querySelector("[data-action='start']");
const stopRef = document.querySelector("[data-action='stop']");

class Timer {
	constructor() {
		this.intervalId = null;
		this.isActive = false;
	}
	start() {
		if (this.isActive) return;
		const startTime = Date.now();
		this.isActive = true;
		this.intervalId = setInterval(() => {
			const currentTime = Date.now();

			console.log(currentTime - startTime);
			changeColor();
		}, 1000);
	}
	stop() {
		clearInterval(this.intervalId);
		this.isActive = false;
	}
}
const timer = new Timer();

startRef.addEventListener("click", () => {
	timer.start();
});
stopRef.addEventListener("click", () => {
	timer.stop();
});

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
function changeColor() {
	const color = colors[randomIntegerFromInterval(0, colors.length)];
	document.body.style.backgroundColor = color;
}
