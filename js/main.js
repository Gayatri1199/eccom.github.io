// JS INDEX
// 01. Toggling menu
// 02. Hero-Section Slider
// 03. Arrival Filter 

$(document).ready(function(){
	$('#menu').click(function(){
		$('ul').toggleClass('show');
		$(this).toggleClass('fa-times');
	});

// Hero section js starts
$('.hero-section').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Hero section js starts

// ARRIVAL FILTER STARTS

	$('.list').click(function(){
		const value = $(this).attr('data-filter');
		if (value =='All') {
			$('.itemBox').show('1000');
		}
		else{

			$('.itemBox').not('.'+value).hide('1000');
			$('.itemBox').filter('.'+value).show('1000');
		}
	})

// ARRIVAL FILTER ENDS


// BEST SELLER SECTION JS STARTS
$('.best-seller').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
// BEST SELLER SECTION JS STARTS

// GALLERY SECTION JS STARTS
$('.gallery').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// GALLERY SECTION JS STARTS

const newYear = () => {
	const countDate = new Date( 'March 11, 2022 00:00:00').getTime();
	const now = new Date().getTime();
	const gap = countDate - now;
	

	// How will this time work?
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	// Calculating the individuals.
	const textDay = Math.floor(gap / day);
	const textHour = Math.floor((gap % day) / hour);
	const textMinute = Math.floor((gap % hour) / minute);
	const textSecond = Math.floor((gap % minute) / second);

	document.querySelector(".day").innerText = textDay +" "+"Days";
	document.querySelector(".hours").innerText = textHour +" "+"Hrs";
	document.querySelector(".minutes").innerText = textMinute +" "+"Mins";
	document.querySelector(".seconds").innerText = textSecond +" "+"Secs";

	console.log(textDay);
	// var now = new Date().getTime();
	// gap = countDate - now;

	// var second = 1000;
	// var minute = second * 60;
	// var hour = minute * 60;
	// var day = hour * 24;

	// var d = Math.floor(gap / (day));
	// var h = Math.floor((gap % (day)) / (hour));
	// var m = Math.floor((gap % (hour)) / (minute));
	// var s = Math.floor((gap % (minute)) / (second));

	// document.getElementById('day').innerText = d;
	// document.getElementById('hours').innerText = h;
	// document.getElementById('minutes').innerText = m;
	// document.getElementById('seconds').innerText = s;


};
newYear();
});


