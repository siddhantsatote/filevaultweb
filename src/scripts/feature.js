const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let intervalH1 = null; // Separate interval for .featuredH1
let intervalH2 = null; // Separate interval for .featuredH2

document.querySelector(".featuredH1").onmouseover = (event) => {
	let iteration = 0;

	clearInterval(intervalH1); // Use intervalH1 for .featuredH1

	intervalH1 = setInterval(() => {
		event.target.innerText = event.target.innerText
			.split("")
			.map((letter, index) => {
				if (index < iteration) {
					return event.target.dataset.value[index];
				}

				return letters[Math.floor(Math.random() * 26)];
			})
			.join("");

		if (iteration >= event.target.dataset.value.length) {
			clearInterval(intervalH1);
		}

		iteration += 1 / 3;
	}, 30);
};

document.querySelector(".featuredH2").onmouseover = (event) => {
	let iteration = 0;

	clearInterval(intervalH2); // Use intervalH2 for .featuredH2

	intervalH2 = setInterval(() => {
		event.target.innerText = event.target.innerText
			.split("")
			.map((letter, index) => {
				if (index < iteration) {
					return event.target.dataset.value[index];
				}

				return letters[Math.floor(Math.random() * 26)];
			})
			.join("");

		if (iteration >= event.target.dataset.value.length) {
			clearInterval(intervalH2);
		}

		iteration += 1 / 3;
	}, 30);
};
