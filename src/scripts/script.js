// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const backgroundTimeline = gsap.timeline();

backgroundTimeline.to("#featured", {
	backgroundColor: "black",
	duration: 0.3,
	ease: "power1.inOut",
});

ScrollTrigger.create({
	trigger: "#featured",
	markers: true,
	start: "-15% top",
	end: "35% center",
	animation: backgroundTimeline,
	scrub: 4,
});
