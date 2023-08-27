Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
	videos: ["src/scripts/0.mp4", "src/scripts/3.mp4"],
});
// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger); //add the scrolltrigger
gsap.to(".fleftlm", {
	scrollTrigger: {
		trigger: "#fimages",
		pin: true,
		start: "top top",
		end: "bottom bottom",
		endTrigger: ".last",
		scrub: 1,
	},
	y: "-300%",
	ease: Power1,
});

let sections = document.querySelectorAll(".fleftlm");

Shery.imageEffect(".images", {
	style: 3,
	config: { onMouse: { value: 1 } },
	slideStyle: (setScroll) => {
		sections.forEach(function (section, index) {
			ScrollTrigger.create({
				//scroll trigger starting
				trigger: section,
				start: "top top",
				scrub: 1,
				onUpdate: function (prog) {
					setScroll(prog.progress + index);
				},
			});
		});
	},
});

const backgroundTimeline = gsap.timeline();

backgroundTimeline.to("#featured", {
	backgroundColor: "black",
	duration: 0.3,
	ease: "power1.inOut",
});

ScrollTrigger.create({
	trigger: "#featured",
	// markers: true,
	start: "-10% top",
	end: "15% center",
	animation: backgroundTimeline,
	scrub: 4,
});
// cursor follower
