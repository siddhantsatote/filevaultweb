document.querySelectorAll(".elem").forEach(function (elem) {
	var rotate = 0;
	var diffrot = 0;

	elem.addEventListener("mouseleave", function (dets) {
		gsap.to(elem.querySelector("img"), {
			opacity: 0,
			ease: Power3,
			duration: 0.5,
		});
	});

	elem.addEventListener("mousemove", function (dets) {
		var diff = dets.clientY - elem.getBoundingClientRect().top;
		diffrot = dets.clientX - rotate;
		rotate = dets.clientX;
		gsap.to(elem.querySelector("img"), {
			opacity: 1,
			ease: Power3,
			top: diff,
			left: dets.clientX,
			rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
		});
	});
});
// text effect
let index1 = 0,
	interval1 = 1000;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star) => {
	star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
	star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

	star.style.animation = "none";
	star.offsetHeight;
	star.style.animation = "";
};

for (const star of document.getElementsByClassName("magic-star")) {
	setTimeout(() => {
		animate(star);

		setInterval(() => animate(star), 1000);
	}, index++ * (interval / 3));
}
