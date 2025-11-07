/*

Template Name:  Gtbus
Description:  Gtbus Consulting WordPress Theme
Author: themexriver
Version: 1.0

====javascript indexing======
*/



(function ($) {
	"use strict";

let prevScrollPos = window.pageYOffset;
const header = document.getElementById("stickyHeader");

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
	// Add the 'sticky' class when scrolling up
	header.classList.remove("sticky");
  } else {
	// Remove the 'sticky' class when scrolling down
	header.classList.add("sticky");
  }

  prevScrollPos = currentScrollPos;
};


$(document).on('click', '.txt-faq-accordion .accordion-item', function(){
	$(this).addClass('faq_active').siblings().removeClass('faq_active')
});
$(document).on('click', '.txt-service-accordion .accordion-item', function(){
	$(this).addClass('faq_active').siblings().removeClass('faq_active')
});


document.addEventListener("DOMContentLoaded", function () {
	let preloader = document.querySelector("#preloader");
	window.addEventListener('load', function(){
	  preloader.classList.add("preloaded");
	  setTimeout(function () {
			preloader.remove();
				const txaaddclass = gsap.utils.toArray('.gtb-toggle-class');
				txaaddclass.forEach(img => {
					gsap.to(img, {
						scrollTrigger: {
							trigger: img,
							scrub: 1,
							start: "top 80%",
							end: "top 10%",
							toggleClass: "active",
							toggleActions: "play reverse play reverse",
							once: true,
						}
					});
				});
				
	  if (document.documentElement.dir !== "rtl") {
				// gsap-title-animation-start
				gsap.registerPlugin(SplitText);

				var st = $(".gtb-split-text");
					if(st.length == 0) return;
					gsap.registerPlugin(SplitText);
					st.each(function(index, el) {
					el.split = new SplitText(el, { 
						type: "lines,words,chars",
						linesClass: "split-line"
					});
					gsap.set(el, { perspective: 400 });
					if( $(el).hasClass('gtb-title-ani-1') ){
						gsap.set(el.split.chars, {
						opacity: 1,
						webkitTextStroke: "1px #fff",
						color:'transparent',
						x: "50",
						ease: "Back.easeOut",
						});
					}
					if( $(el).hasClass('gtb-title-ani-2') ){
						gsap.set(el.split.chars, {
						opacity: 1,
						webkitTextStroke: "1px black",
						color:'transparent',
						x: "50",
						ease: "Back.easeOut",
						});
					}
					el.anim = gsap.to(el.split.chars, {
						scrollTrigger: {
							trigger: el,
							toggleActions: "play reverse play reverse",
							start: "top 90%",
						},
						x: "0",
						y: "0",
						rotateX: "0",
						color: 'inherit',
						webkitTextStroke: "0px white",
						scale: 1,
						opacity: 1,
						duration: 1, 
						stagger: 0.02,
					});
				});}
		});
	})
});
  


// search-popup-start

$('.search_btn_toggle').on('click', function() {
	$('.overlay, .search_1_popup_active').addClass('active');
});
$('.overlay, .search_1_popup_close').on('click', function() {
	$('.search_1_popup_active').removeClass('active');
	$('.overlay').removeClass('active');
})
// search-popup-end

// mobile-menu-start

if($('.mobile-main-navigation li.dropdown ul').length){
	$('.mobile-main-navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
	$('.mobile-main-navigation li.dropdown .dropdown-btn').on('click', function() {
		$(this).prev('ul').slideToggle(500);
	});
}
$(".dropdown-btn").on("click", function () {
	$(this).toggleClass("toggle-open");
});

// mobile-menu-end


// gsap-start

gsap.registerPlugin(ScrollTrigger);


// smoooth scroll activation start
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
// smoooth scroll activation end



// mobile-menu-toggle-start

var menuToggle = document.getElementById("menuToggle")
var menuToggle2 = document.getElementById("menuToggle2")

var menuBar = gsap.timeline();
menuBar.reverse();
var menubgline = gsap.timeline({ paused: true });

menubgline.to('.fullpage-menu' , {
	duration: 0,
	display: "block",
	ease: 'Expo.easeInOut'
});
menubgline.to('.menu-bg span' , {
	duration: .5,
	width: "100%",
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});
menubgline.to('.menu-logo' , {
	x: 0,
	opacity: 1,
	ease: 'Expo.easeInOut'
});
menubgline.to('.mobile-main-navigation , .mobile-search-bar' , {
	opacity: 1,
	y: 0,
	ease: 'Expo.easeInOut'
});
menubgline.to('.fullpage-menu-close' , {
	duration: 0,
	x: 0,
	rotate: 0,
	opacity: 1,
	ease: 'Expo.easeInOut'
}, "<");
menubgline.to('.fullpage-menu-gellary .item' , {
	duration: 0,
	opacity: 1,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});
menubgline.to('.full-page-socail-link li' , {
	opacity: 1,
	y: 1,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});


menubgline.reverse();
menuToggle.addEventListener('click', function(){
	// menuBar.reversed(!menuBar.reversed());
	menubgline.reversed(!menubgline.reversed());
});
menuToggle2.addEventListener('click', function(){
	// menuBar.reversed(!menuBar.reversed());
	menubgline.reversed(!menubgline.reversed());
});
// mobile-menu-toggle-end

function solutionAnimation($scope, $) {
gsap.timeline({
	scrollTrigger: {
	  trigger: '.gtb-solutions-1-img',
	  scrub: 1,
	  toggleActions: "play reverse play reverse",
	  markers: false,
	  toggleClass: "active"
	}
});}
	

gsap.timeline({
	scrollTrigger: {
	  trigger: '.gtb-solutions-1-content-bg',
	  scrub: 1,
	  start: "top 40%",
	  toggleActions: "play none none none",
	  markers: false,
	  toggleClass: "active"
	}
});
	
var gtbp1 = gsap.timeline({

	scrollTrigger: {
	  animation: gtbp1,
	  trigger: '.gtb-progress-1-img',
	  start: "top 90%",
	  end: "top 00%",
	  scrub: 1,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
	});
	
	gtbp1.from( ".gtb-progress-1-img img" , { yPercent: 100,  duration:1 } )
	
var gtbpr1 = gsap.timeline({

	scrollTrigger: {
	  animation: gtbpr1,
	  trigger: '.gtb-project-1-area',
	  start: "top 90%",
	  end: "top 0%",
	  scrub: 1,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
	});
	
	gtbpr1.from( ".gtb-project-1-bg-1" , { bottom: "30%",  duration:1 } )
	
var gtbpri1 = gsap.timeline({

	scrollTrigger: {
	  animation: gtbpri1,
	  trigger: '.gtb-price-1-item',
	  start: "top 90%",
	  end: "top 50%",
	  scrub: 1,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
	});
	gtbpri1.from( ".gtb-price-1-item img" , { scale: 2, rotateZ: 30,  duration:1 } )

var gtbss1 = gsap.timeline({

	scrollTrigger: {
	  animation: gtbss1,
	  trigger: '.gtb-success-1-bg-shape-1',
	  start: "top 130%",
	  end: "top 0%",
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
	});
	gtbss1.from( ".gtb-success-1-bg-shape-1" , { height: 0,  duration:1 } )

var gtbcta1 = gsap.timeline({

	scrollTrigger: {
	  animation: gtbcta1,
	  trigger: '.gtb-cta-1-area',
	  start: "top 80%",
	  end: "top 0%",
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
	});
	gtbcta1.from( ".gtb-cta-1-bg-img" , { scaleX: 2,  duration:1 } )

		var gtbb1 = gsap.timeline({
			scrollTrigger: {
			  animation: gtbb1,
			  trigger: '.gtb-blog-1-bg-img',
			  start: "top 80%",
			  end: "top -50%",
			  toggleActions: "play reverse play reverse",
			  markers: false
			}
			});
		gtbb1.from( ".gtb-blog-1-bg-img" , { height: 0,  duration:1 } )


var progress = gsap.timeline({

	scrollTrigger: {
	  animation: progress,
	  trigger: '.progress-line',
	  start: "top 95%",
	  end: "top 0%",
	  toggleActions: "play none none none",
	  markers: false
	}
	});
	progress.from( ".progress-line" , { xPercent: -100,  duration:4 } )


var sprd = gsap.timeline({

	scrollTrigger: {
	  animation: sprd,
	  trigger: '.gtb-sponsored-1-item',
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
	});
	sprd.from( ".gtb-sponsored-1-item .single-item" , { scale: .7, stagger: .2,  duration:.3 } )


// gsap-end



/*
services-1
====start====
*/
function serviceCarouselActive($scope, $) {
let gts1= new Swiper('.gtb-s1-active', {
	loop: true,
	spaceBetween: 50,
	rtl: false,
  
	speed: 500,
	// autoplay: {
	//   delay: 4000,
	//   },
  
	navigation: {
	  nextEl: ".gtb_s1_next",
	  prevEl: ".gtb_s1_prev",
	},
  
	breakpoints: {
	  0: {
		slidesPerView: 1,
	  },
	  480: {
	  slidesPerView: 1,
	  },
	  576: {
		slidesPerView: 1,
	  },
	  768: {
		slidesPerView: 2,
	  },
	  992: {
		slidesPerView: 2,
	  },
	  1200: {
		slidesPerView: 3,
		centeredSlides: true,
	  },
	},
  
	
  });}
  /*
  services-1
  ====end====
  */

/*
project-1
====start====
*/
function projectCarouselActive($scope, $) {
let gtp1= new Swiper('.gtb-p1-active', {
	loop: true,
	spaceBetween: 40,
	rtl: false,
  
	speed: 500,
	autoplay: {
	  delay: 4000,
	  },
  
	navigation: {
	  nextEl: ".gtb_p1_next",
	  prevEl: ".gtb_p1_prev",
	},
  
	breakpoints: {
	  0: {
		slidesPerView: 1,
	  },
	  480: {
	  slidesPerView: 1,
	  },
	  576: {
		slidesPerView: 1,
	  },
	  768: {
		slidesPerView: 2,
	  },
	  992: {
		slidesPerView: 2,
	  },
	  1200: {
		slidesPerView: 3,
		centeredSlides: true,
	  },
	},
  
	
  });
  var swiper2 = new Swiper(".txt-project-slider-1", {
	slidesPerView: 3,
	centeredSlides: true,
	loop: true,
	spaceBetween: 30,
	roundLengths: true,
	speed: 1000,
	navigation: {
		prevEl: ".txt-pro-button-prev",
		nextEl: ".txt-pro-button-next",
	},
	breakpoints: {  
		'1400': {
			slidesPerView: 3,
		},
		'1300': {
			slidesPerView: 2,
			centeredSlides: true,
		},
		'1200': {
			slidesPerView: 2,
			centeredSlides: true,
		},
		'992': {
			slidesPerView: 1,
			centeredSlides: false,
		},
		'768': {
			slidesPerView: 1,
			centeredSlides: false,
		},
		'576': {
			slidesPerView: 1,
			centeredSlides: false,

		},
		'0': {
			slidesPerView: 1,
			centeredSlides: false,
		},
	},
});
}
  /*
  project-1
  ====end====
  */

  function testimonialActive($scope, $) {

  var swiper = new Swiper(".txt-testimonial-slider-nav-1", {
	loop: true,
	spaceBetween: 0,
	speed: 500,
	slidesPerView: 5,
	centeredSlides: true,
	navigation: {
		nextEl: ".txt-testimonial-next-1",
		prevEl: ".txt-testimonial-prev-1",
	},
	breakpoints: {  
		'1400': {
			slidesPerView: 5,
		},
		'1200': {
			slidesPerView: 5,
		},
		'992': {
			slidesPerView: 3,
		},
		'768': {
			slidesPerView: 3,
		},
		'576': {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		'0': {
			slidesPerView: 1,
		},
	},
});
var swiper2 = new Swiper(".txt-testimonial-slider-for-1", {
	loop: true,
	spaceBetween: 10,
	effect: 'fade',
	navigation: {
		nextEl: ".txt-testimonial-next-1",
		prevEl: ".txt-testimonial-prev-1",
	},
	thumbs: {
		swiper: swiper,
	},
});}
function sponsorActive($scope, $) {
var slider = new Swiper('.txt-sponsor-slider-1', {
	spaceBetween: 90,
	slidesPerView: 7,
	roundLengths: true,
	loop: true,
	autoplay: {
		enabled: true,
		delay: 6000
	},
	speed: 400,
	breakpoints: {
		'1600': {
			slidesPerView: 7,
		},
		'1200': {
			slidesPerView: 6,
		},
		'992': {
			slidesPerView: 4,
		},
		'768': {
			slidesPerView: 4,
		},
		'576': {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		'0': {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},
});
var slider = new Swiper('.txt-sponsor-slider-2', {
	spaceBetween: 85,
	slidesPerView: 5,
	roundLengths: true,
	loop: true,
	autoplay: {
		enabled: true,
		delay: 6000
	},
	speed: 400,
	breakpoints: {
		'1600': {
			slidesPerView: 5,
		},
		'1200': {
			slidesPerView: 4,
		},
		'992': {
			slidesPerView: 4,
		},
		'768': {
			slidesPerView: 3,
		},
		'576': {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		'0': {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},
});
}

/*
project-1
====start====
*/
function teamOneActive($scope, $) {
let gtbt1= new Swiper('.gtb-t1-active', {
	loop: true,
	spaceBetween: 30,
	rtl: false,
  
	speed: 500,
	autoplay: {
	  delay: 4000,
	  },
  
	navigation: {
	  nextEl: ".gtb_t1_next",
	  prevEl: ".gtb_t1_prev",
	},
  
	breakpoints: {
	  0: {
		slidesPerView: 1,
	  },
	  480: {
	  slidesPerView: 1,
	  },
	  576: {
		slidesPerView: 1,
	  },
	  768: {
		slidesPerView: 2,
	  },
	  992: {
		slidesPerView: 2,
	  },
	  1200: {
		slidesPerView: 3,
	  },
	},
  
	
  });}
  /*
  project-1
  ====end====
  */

  function galleryActive($scope, $) {
  let gtbf1 = new Swiper('.gtb-f1-active', {
	loop: true,
	spaceBetween: 0,
	direction: "vertical",
	mousewheel: true,
	pagination: {
	  el: ".gtb-f1-pagination",
	  clickable: true,
	},
	breakpoints: {
		0: {
		  slidesPerView: 2,
		},
		480: {
		slidesPerView: 2,
		},
		576: {
		  slidesPerView: 2,
		},
		768: {
		  slidesPerView: 2,
		},
		992: {
		  slidesPerView: 2,
		},
	  },

  });}


/*
back-to-top
=====start==== */
var backtotop = $('.scroll-top');

$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	backtotop.addClass('show');
	} else {
	backtotop.removeClass('show');
	}
});

backtotop.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '700');
});
/*
back-to-top
=====end==== 
*/



/*
mouse-move-animation
====start====
*/

document.addEventListener("mousemove" , parallax);
function parallax(e){

    document.querySelectorAll(".object").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) /250;
        var y = (e.clientY * moving_value) /250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y +"px)";
    })

}

/*
mouse-move-animation
*/

/*
mouse-over-scale
=====start=====
*/

$('.tilt_scale').tilt({
    glare: true,
    maxGlare: 1
})

/*
mouse-over-scale
=====end=====
*/


/*
counter-activition
====start====
*/
$('.counter').counterUp({
	delay: 10,
	time: 3000
});
/*
counter-activition
====end====
*/


/*
data-bg-activition
====start====
*/
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})
/*
data-bg-activition
====end====
*/

/*
wow-activition
=====start==== 
*/
new WOW().init();
/*
wow-activition
=====end==== 
*/
$('.js-tilt').tilt({})


/**
	 * elementor Common Loading Scripts
	 */
function content_ready_scripts() {
	$("[data-background]").each(function(){
		$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
	})
}

$(window).on('elementor/frontend/init', function() {

	if (elementorFrontend.isEditMode()) {

		elementorFrontend.hooks.addAction('frontend/element_ready/widget', function() {
			content_ready_scripts();
		});

	} else {

		elementorFrontend.hooks.addAction('frontend/element_ready/widget', function() {
			content_ready_scripts();
		});
	}

});

if($('.wow').length){
	var wow = new WOW(
	{
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       true,
		live:         true
	}
	);
	wow.init();
};
setTimeout(() => {
	var a = document.querySelectorAll(".txt-btn-1 a");
	a.forEach(function (a) {
		a.addEventListener("mouseover", function () {
			var c, b, d;
			!a.classList.contains("animating") &&
			!a.classList.contains("mouseover") &&
			(a.classList.add("animating", "mouseover"),
				(c = a.innerText.split("")),
				setTimeout(function () {
					a.classList.remove("animating");
				}, (c.length + 1) * 50),
				(b = a.dataset.animation),
				b || (b = "txt-spin"),
				(a.innerText = ""),
				c.forEach(function (b) {
					b == " " && (b = "&nbsp;"), (a.innerHTML += '<span class="letter">' + b + "</span>");
				}),
				(d = a.querySelectorAll(".letter")),
				d.forEach(function (a, c) {
					setTimeout(function () {
						a.classList.add(b);
					}, 50 * c);
				}));
		}),
		a.addEventListener("mouseout", function () {
			a.classList.remove("mouseover");
		});
	});
}, 100);
gsap.utils.toArray(' .appear_left').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 2,
			start: "top 90%",
			end: "top 70%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1,  x: "-=300"}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
})
gsap.utils.toArray(' .appear_right').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 2,
			start: "top 90%",
			end: "top 70%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1,  x: "+=300"}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
})
gsap.utils.toArray(' .appear_top').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 2,
			start: "top 90%",
			end: "top 70%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1,  y: "+=300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
})
gsap.utils.toArray(' .appear_bottom').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 2,
			start: "top 90%",
			end: "top 70%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1,  y: "-=300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
})
let splitTextLines = gsap.utils.toArray(".txt-text-anim p");
splitTextLines.forEach(splitTextLine => {

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: splitTextLine,
			start: 'top 90%',
			duration: 2,
			end: 'bottom 60%',
			scrub: false,
			markers: false,
			toggleActions: 'play none none none'
		}
	});
	const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
	gsap.set(splitTextLine, { perspective: 400 });
	itemSplitted.split({ type: "lines" })
	tl.from(itemSplitted.lines, {
		duration: 1,
		delay: 0.5, 
		opacity: 0, 
		x: "50",
		force3D: true, 
		transformOrigin: "top center -50",
		stagger: 0.1 
	});
});
jQuery('.video_box').magnificPopup({
	disableOn: 200,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false,
});

var ltn__active_item = $('.txt-service-item-1')
				ltn__active_item.mouseover(function() {
					ltn__active_item.removeClass('active');
					$(this).addClass('active');
				});
				$('.ptx-custom-bottom-img').marquee({
					speed: 8,
					gap: 0,
					delayBeforeStart: 0,
					direction: 'left',
					duplicated: true,
					pauseOnHover: false, 
					startVisible:true,
				});
				jQuery(window).on('load', function(){
					const boxes = gsap.utils.toArray('.txt_item_active');
					boxes.forEach(svg => {
						gsap.to(svg, {
							scrollTrigger: {
								trigger: svg,
								start: "top 70%",
								end: "bottom bottom",
								toggleClass: "active",
								once: true,
							}
						});
					});
				});
				jQuery(window).on('load', function(){
					const boxes = gsap.utils.toArray('.banner_shape_active');
					boxes.forEach(svg => {
						gsap.to(svg, {
							scrollTrigger: {
								trigger: svg,
								start: "top 70%",
								end: "bottom bottom",
								toggleClass: "active",
								once: true,
								delay:1,
							}
						});
					});
				});
				let endTl = gsap.timeline({
					repeat: -1,
					delay: 0.5,
					scrollTrigger: {
						color: '#5D56EF',
						trigger: '.bounce-text',
						start: 'bottom 100%-=50px'
					}
				});
				gsap.set('.bounce-text', {
					opacity: 1
				});
				gsap.to('.bounce-text', {
					opacity: 1,
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: '.bounce-text',
						start: 'bottom 100%-=50px',
						once: true
					}
				});
				let mySplitText = new SplitText(".bounce-text", { type: "words,chars" });
				let chars = mySplitText.chars;
				let endGradient = chroma.scale(['#5D56EF', '#F950BA', '#5D56EF', '#F950BA']);
				endTl.to(chars, {
					duration: 0.5,
					scaleY: 0.6,
					ease: "power3.out",
					stagger: 0.04,
					transformOrigin: 'center bottom'
				});
				endTl.to(chars, {
					yPercent: -15,
					ease: "elastic",
					stagger: 0.03,
					duration: 0.8
				}, 0.5);
				endTl.to(chars, {
					scaleY: 1,
					ease: "elastic.out(2.5, 0.2)",
					stagger: 0.03,
					duration: 1.5
				}, 0.5);
				endTl.to(chars, {
					color: (i, el, arr) => {
						return endGradient(i / arr.length).hex();
					},
					ease: "power2.out",
					stagger: 0.03,
					duration: 0.3
				}, 0.5);
				endTl.to(chars, {
					yPercent: 0,
					ease: "back",
					stagger: 0.03,
					duration: 0.8
				}, 0.7);
				endTl.to(chars, {
					color: '#5D56EF',
					duration: 1.4,
					stagger: 0.05
				});

				jQuery(document).ready(function() {
					var st = jQuery(".tx-split-text");
					if(st.length == 0) return;
					gsap.registerPlugin(SplitText);
					st.each(function(index, el) {
						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line"
						});
						gsap.set(el, { perspective: 400 });
						if( jQuery(el).hasClass('split-in-fade') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								ease: "Back.easeOut",
							});
						}
						if( jQuery(el).hasClass('split-in-right') ){
							gsap.set(el.split.chars, {
								opacity: 1,
								x: "100",
								color:'#F950BA',
								ease: "Back.easeOut",
							});
						}
						if( jQuery(el).hasClass('split-in-right-2') ){
							gsap.set(el.split.chars, {
								opacity: 1,
								x: "100",
								color:'#00DDD0',
								ease: "Back.easeOut",
							});
						}
						if( jQuery(el).hasClass('split-in-left') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								x: "-50",
								ease: "circ.out",
							});
						}
						if( jQuery(el).hasClass('split-in-up') ){
							gsap.set(el.split.chars, {
								y: "80",
								ease: "circ.out",
							});
						}
						if( jQuery(el).hasClass('split-in-down') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								y: "-80",
								ease: "circ.out",
							});
						}
						if( jQuery(el).hasClass('split-in-rotate') ){
							gsap.set(el.split.chars, {
								opacity: 1,
								rotateX: "50deg",
								ease: "circ.out",
								color:'#A249ED',
								ease: "Back.easeOut",

							});
						}
						if( jQuery(el).hasClass('split-in-scale') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								scale: "0.5",
								ease: "circ.out",
							});
						}
						if( jQuery(el).hasClass('split-in-fade') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								duration: 0.2, 
								ease: "power1.out",
								stagger: { amount: 0.8 },
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
							},
							x: "0",
							y: "0",
							rotateX: "0",
							color: 'inherit',
							webkitTextStroke: "0px white",
							scale: 1,
							opacity: 1,
							duration: 1, 
							stagger: 0.02,
						});
					});
				});
				
				jQuery(window).on('load',function(){
					var st = $(".txt-banner-title");
					if(st.length == 0) return;
					gsap.registerPlugin(SplitText);
					st.each(function(index, el) {
						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line"
						});
						gsap.set(el, { perspective: 400 });


						if( $(el).hasClass('banner-title-text') ){
							gsap.set(el.split.chars, {
								opacity: 1,
								rotateX: "-50deg",
								ease: "circ.out",
								color:'#F950BA',
								ease: "Back.easeOut",
							});
						}
						if( jQuery(el).hasClass('banner-title-text-2') ){
							gsap.set(el.split.chars, {
								opacity: 1,
								x: "100",
								color:'#00DDD0',
								ease: "circ.out"
							});
						}

						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
							},
							x: "0",
							y: "0",
							rotateX: "0",
							color: 'inherit',
							webkitTextStroke: "0px white",
							scale: 1,
							opacity: 1,
							duration: 1, 
							stagger: 0.02,
							delay:1,
						});
					});
				});
				gsap.utils.toArray('.txt-sponsor-slider-1').forEach((el, index) => { 
					let tl1 = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 1,
							start: "top 80%",
							end: "buttom 60%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					tl1
					.set(el, {transformOrigin: 'center center'})
					.from(el, { background: "#000", scale: .7 }, {background: "inherit", scale: 1, duration: 1, immediateRender: false})
				})
				gsap.utils.toArray('.txt-banner-sponsor-area').forEach((el, index) => { 
					let tl1 = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 1,
							start: "top 80%",
							end: "buttom 60%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					tl1
					.set(el, {transformOrigin: 'center center'})
					.from(el, { background: "#36fff3", scale: .7 }, {background: "inherit", scale: 1, duration: 1, immediateRender: false})
				})
				gsap.utils.toArray('.txt-get-touch-circle').forEach((el, index) => { 
					let tl1 = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 1,
							start: "top 80%",
							end: "buttom 60%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					tl1
					.set(el, {transformOrigin: 'center center'})
					.from(el, { background: "#36fff3", scale: .7 }, {background: "inherit", scale: 1, duration: 1, immediateRender: false})
				})
				gsap.utils.toArray('.txt-contact-cta').forEach((el, index) => { 
					let tl1 = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 1,
							start: "top 80%",
							end: "buttom 60%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					tl1
					.set(el, {transformOrigin: 'center center'})
					.from(el, { scale: .7 }, { scale: 1, duration: 1, immediateRender: false})
				})

				function featuredAnimate(current) {
					$('[data-anim=featured-overflow]').each(function() {
						let arr = $(this).children('div');
						for (var i = 0; i < arr.length; i++) {
							$(arr[i]).removeClass('active done');
							if (i < current) {
								$(arr[i]).addClass('done');
							}
							if (i == current) {
								$(arr[i]).addClass('active');
							}
						}
					});
				}
		
				$('.txt-featured__anim').removeClass('done');
				$('.col.mod--featured-choose').on('click', function() {
					let index = $(this).index('.col.mod--featured-choose');
					$('.col.mod--featured-choose').removeClass('active');
					$(this).addClass('active');
					if (index == 1) {
						featuredAnimate(index);
						$('.txt-featured__line').css('left', '20%');
					} else if (index == 2) {
						featuredAnimate(index);
						$('.txt-featured__line').css('left', '40%');
					} else if (index == 3) {
						featuredAnimate(index);
						$('.txt-featured__line').css('left', '60%');
					} else if (index == 4) {
						featuredAnimate(index);
						$('.txt-featured__line').css('left', '80%');
					} else {
						featuredAnimate(index);
						$('.txt-featured__line').css('left', '0%');
					}
				});




$(window).on('elementor/frontend/init', function () {
	elementorFrontend.hooks.addAction('frontend/element_ready/gtbus-services-carousel.default', serviceCarouselActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/gtbus-tm-carousel.default', teamOneActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/gtbus-project-carousel.default', projectCarouselActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/gtbus-solution-area.default', solutionAnimation);
	elementorFrontend.hooks.addAction('frontend/element_ready/gtbus-gallery.default', galleryActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/gtbus-tm-testimonial.default', testimonialActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/gtbus-sponsro.default', sponsorActive);
});

})(jQuery);