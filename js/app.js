$(document).ready(function () {
	$('[data-page="entry"]').addClass('active');


	// Page transformations and buttons--------------------------------------------------------------------------------------------------------

	// When button1 is clicked:
	$('.button1').click(function () {
		// inner2 becomes the active page. It becomes visible by translating it to 0 and hiding the other pages on the sides.
		$('.page').removeClass('active');
		$('[data-page="inner_1"]').addClass('active');
		$('.page[data-page=entry]').css('transform', 'translate(-100%)');
		$('.page[data-page=inner_1]').css('transform', 'translate(-100%)');
		$('.page[data-page=inner_2]').css('transform', 'translate(0%)');
		// inner 2 background opacity is set to normal.
		$('.page[data-page=inner_2_opacity]').css('background-color', 'rgba(0,0,0,0.0)');
	});

	// When button2 is clicked:
	$('.button2').click(function () {
		// inner 1 becomees the active page. It becomes visible by translating it to 0 and hidding the other pages on the sides.
		$('.page[data-page=entry]').css('transform', 'translate(100%)');
		$('.page[data-page=inner_1]').css('transform', 'translate(0%)');
		$('.page[data-page=inner_2]').css('transform', 'translate(+100%)');
		$('.page').removeClass('active');
		$('[data-page="inner_2"]').addClass('active');
		// animatinos from inner 1 are reset:
		// - the option menu is hidden in the top
		$('.optionMenu').css('top', '-100%');
		$('.optionMenu').css('animation', 'none');
		// - explore div is set to move left and right and the text is made visible
		$('.explore').css('animation', 'move-right-and-left 3s  ease-in-out infinite');
		$('.explore-text').removeClass('invisible');
		$('.p').addClass('invisible');
		// -inner 1 backgorund opacity is set to normal.
		$('.page[data-page=inner_1_opacity]').css('background-color', 'rgba(0,0,0,0)');
	});

	// When button3 is clicked:
	$('.button3').click(function () {
		// entry becomees the active page. It becomes visible by translating it to 0 and hidding the other pages on the sides.
		$('.page').removeClass('active');
		$('.page[data-page=entry]').css('transform', 'translate(0%)');
		$('.page[data-page=inner_1]').css('transform', 'translate(-100%)');
		$('[data-page="entry"]').addClass('active');
		// inner 2 becomes a bit dark.
		$('.page[data-page=inner_1_opacity]').css('transition', 'background-color 2s ease-in-out');
		$('.page[data-page=inner_1_opacity]').css('background-color', 'rgba(0,0,0,0.25)');
	});

	// When button 3 is hovered over, the button div increases its width. 
	$('.button3').mouseenter(function () {
		$(this).css('width', '12%');
	});
	$('.button3').mouseleave(function () {
		$(this).css('width', '10%');
	});

	// When button 4 is clicked:
	$('.button4').click(function () {
		// entry becomees the active page. It becomes visible by translating it to 0 and hidding the other pages on the sides.
		$('.page[data-page=entry]').css('transform', 'translate(0%)');
		$('.page[data-page=inner_2]').css('transform', 'translate(100%)');
		$('.page').removeClass('active');
		$('[data-page="entry"]').addClass('active');
		// inner 2 becomes a bit dark.
		$('.page[data-page=inner_2_opacity]').css('transition', 'background-color 2s ease-in-out');
		$('.page[data-page=inner_2_opacity]').css('background-color', 'rgba(0,0,0,0.25)');
	});

	// When button 4 is hovered over, the button div increases its width, 
	$('.button4').mouseenter(function () {
		$(this).css('width', '12%');
	});
	$('.button4').mouseleave(function () {
		$(this).css('width', '10%');
	});


	// Page transformations and buttons--------------------------------------------------------------------------------------------------------























	// Entry ----------------------------------------------------------------------------------------------------

	// When the mouse hovers over the government:
	$('.government').mouseenter(function () {
		// The left arrow brights 
		$('.button1').css('transition', 'opacity 0.5s ease-in-out');
		$('.button1').css('opacity', '0');
		// All div elements are shifted to the right
		$(this).css('width', '35%');
		$('.healthCare').css('width', '20%');
		$('.kaonInteractive').css('left', '57.5%');
		$('.healthCareIcon').css('left', '82%');
		$('.governmentIcon').css('left', '27%');
	});
	// When the mouse hovers out of government:
	$('.government').mouseleave(function () {
		// The left arrow stops brighting 
		$('.button1').css('transition', 'opacity 2s ease-in-out');
		$('.button1').css('opacity', '1');
		// All div elements are shifted to the left to their orignal position
		$(this).css('width', '27%');
		$('.healthCare').css('width', '27%');
		$('.kaonInteractive').css('left', '50%');
		$('.healthCareIcon').css('left', '75%');
		$('.governmentIcon').css('left', '20%');
	});

	// When the mouse hovers on healthcare:
	$('.healthCare').mouseenter(function () {
		// The right arrow brights
		$('.button2').css('transition', 'opacity 0.5s ease-in-out');
		$('.button2').css('opacity', '0');
		// All div elements are shifted to the left
		$(this).css('width', '35%');
		$('.government').css('width', '20%');
		$('.kaonInteractive').css('left', '42.5%');
		$('.healthCareIcon').css('left', '68%');
		$('.governmentIcon').css('left', '13%');
	});
	// When the mouse hovers out of healthcare:
	$('.healthCare').mouseleave(function () {
		// The right arrow stops brighting
		$('.button2').css('transition', 'opacity 2s ease-in-out');
		$('.button2').css('opacity', '1');
		// All div elements are shifted to the right to their original position
		$(this).css('width', '27%');
		$('.government').css('width', '27%');
		$('.kaonInteractive').css('left', '50%');
		$('.healthCareIcon').css('left', '75%');
		$('.governmentIcon').css('left', '20%');
	});

	// --------------------------------------------------------------------------------------------------























	// Inner 1 --------------------------------------------------------------------------------------

	// Animations when the Explore div is clicked on:
	$('.explore').click(function () {
		// - The explore div is hidden in the left side of the screen
		$('.explore').css('animation', 'move-left 3s ease-in-out 1 forwards');
		// - The explore text blurs to invisible
		$('.explore-text').addClass('invisible');
		// - The option menu scrolls down and the options transition to visible
		$('.optionMenu').css('animation', 'move-down 3s ease-in-out 1 forwards');
		$('.p').removeClass('invisible');
		// - The page darkens a little bit in a 3 seconds transition
		$('.page[data-page=inner_1_opacity]').css('transition', 'background-color 3s ease-in-out');
		$('.page[data-page=inner_1_opacity]').css('background-color', 'rgba(0,0,0,0.25)');
	});
	// When the mouse hovers over each individual option of the menu,the font of that option interacts and when hovered out it returns to normal :
	// - the text-size increases
	$('p[data-page="option1"]').mouseenter(function () {
		$(this).css('font-size', '110%');
	});
	$('p[data-page="option1"]').mouseleave(function () {
		$(this).css('font-size', '100%');
	});
	$('p[data-page="option2"]').mouseenter(function () {
		$(this).css('font-size', '110%');
	});
	$('p[data-page="option2"]').mouseleave(function () {
		$(this).css('font-size', '100%');
	});
	$('p[data-page="option3"]').mouseenter(function () {
		$(this).css('font-size', '110%');
	});
	$('p[data-page="option3"]').mouseleave(function () {
		$(this).css('font-size', '100%');
	});

	$('p[data-page="option4"]').mouseenter(function () {
		$(this).css('font-size', '110%');
	});
	$('p[data-page="option4"]').mouseleave(function () {
		$(this).css('font-size', '100%');
	});
	// - The text brights:
	$('p').mouseenter(function () {
		$(this).css('filter', 'brightness(300%)');
	});
	$('p').mouseleave(function () {
		$(this).css('filter', '');
	});

	// ---------------------------------------------------------------------------------------------























	// Inner 2 ---------------------------------------------------------------------------------------------------------------

	// While option A and option B divs are hovered over the font interacts and when hovered out the text returns to normal:
	// -vthe text-size increasees
	$('.optionA').mouseenter(function () {
		$(this).css('font-size', '310%');
	});
	$('.optionA').mouseleave(function () {
		$(this).css('font-size', '300%');
	});
	$('.optionB').mouseenter(function () {
		$(this).css('font-size', '310%');
	});
	$('.optionB').mouseleave(function () {
		$(this).css('font-size', '300%');
	});
	// - The text brights
	$('.optionA').mouseenter(function () {
		$(this).css('color', 'rgba(255,255,255,1)');
	});
	$('.optionA').mouseleave(function () {
		$(this).css('color', 'rgba(255,255,255,0.8)');
	});
	$('.optionB').mouseenter(function () {
		$(this).css('color', 'rgba(255,255,255,1)');
	});
	$('.optionB').mouseleave(function () {
		$(this).css('color', 'rgba(255,255,255,0.8)');
	});
	//---------------------------------------------------------------------------------------------------------------------------------------

});
