//import "./modules/fancybox.js";
import "../libs/gsap/gsap.min.js";
import "../libs/gsap/ScrollTrigger.min.js";
import "../libs/gsap/ScrollSmoother.min.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//if (ScrollTrigger.isTouch !== 1) {
	//// для мобильных устройст отображаться не будет
//}

ScrollSmoother.create({
	wrapper: '.scroll-wrapper', //! Указвыть обязательно с . или #
	content: '.scroll-content',
	smooth: 1.5,
	effects: true, // для настройки скорости элемнтов по отдельности
});

// анимация затухания header при скролле
gsap.fromTo('.header', {
	opacity: 1
},
	{
		opacity: 0,
		scrollTrigger: {
			trigger: '.header',
			start: 'center',
			end: '820', // bottom
			scrub: true, // чтобы возвращался
		}
	}
)

let allItemsLeft = gsap.utils.toArray('.portfolio__left .portfolio__item');
allItemsLeft.forEach((item) => {
	gsap.fromTo(item,
		{
			opacity: 0,
			x: -100,
		},
		{
			opacity: 1,
			x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true,
			}
		})
})

let allItemsRight = gsap.utils.toArray('.portfolio__rigth .portfolio__item');

allItemsRight.forEach((item) => {
	gsap.fromTo(item,
		{
			opacity: 0,
			x: 100,
		},
		{
			opacity: 1,
			x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true,
			}
		})
})
