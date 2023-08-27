gsap.from(".clip-top ,.clip-bottom", 2, {
	delay: 1,
	height: "50vh",
	ease: "power4.inOut",
});
gsap.to(".marquee", 3.5, {
	delay: 0.75,
	top: "50%",
	ease: "power4.inOut",
});
gsap.from(".clip-top .marquee,.clip-bottom .marquee", 5, {
	delay: 1,
	left: "100%",
	ease: "power3.inOut",
});
gsap.from(".clip-center .marquee", 5, {
	delay: 1,
	left: "-50%",
	ease: "power3.inOut",
});
gsap.to(".clip-top", 2, {
	delay: 6,
	clipPath: "inset(0 0 100% 0)",
	ease: "power4.inOut",
});
gsap.to(".clip-bottom", 2, {
	delay: 6,
	clipPath: "inset(100% 0 0 0)",
	ease: "power4.inOut",
});

gsap.to(
	".clip-top .marquee , .clip-bottom .marquee .clip-center .marquee span",
	1,
	{
		delay: 6,
		opacity: 0,
		ease: "power2.inOut",
	}
);
// !typing animation
//** Get the paragraph element
const typingText = document.getElementById("typing-text");
const textToType =
	"FileVault is a user-controlled file management system designed to provide a secure and seamless experience for uploading, storing, and downloading files. This project prioritizes user security and privacy, offering a platform where users have full control over their files.";

let index = 0;
const interval = 50;
const typingDelay = 8000;
function typeText() {
	if (index < textToType.length) {
		typingText.textContent += textToType.charAt(index);
		index++;
	} else {
		// clearInterval(typingInterval);
	}
}

// Start the typing animation
// const typingInterval = setInterval(typeText, interval);

// Add a delay to control when the typing animation starts
setTimeout(() => {
	typingText.classList.add("show");
	const typingInterval = setInterval(typeText, interval);
}, typingDelay);
document.addEventListener("DOMContentLoaded", function () {
	setTimeout(function () {
		var fadeDiv = document.querySelector(".img-2");
		fadeDiv.style.opacity = 1;
	}, 6000);
});
document.addEventListener("DOMContentLoaded", function () {
	setTimeout(function () {
		var fadeDiv = document.querySelector(".img-3");
		fadeDiv.style.opacity = 1;
	}, 6000);
});
