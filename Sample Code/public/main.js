console.log('linked')
$(document).ready(function(){

var $body = document.querySelector('body')
var $clickMyName = $('#clickMyName')
var $clickAboutMe = $('#clickAboutMe')
var $clickContactMe = $('#clickContactMe')

$clickMyName.one('click', function(){
	console.log('clicked')

	$.ajax({
		url: "/",
		type: 'GET',
		dataType:'html'
	}).done(function(){
		var $showPic = $('#showPic')

		$showPic.append("<img src= 'http://i.imgur.com/qliOhvp.jpg' height=300 width = 250/>").hide().fadeIn('slow');

	})
})

	$clickAboutMe.one('click', function(){
		console.log('clicked')

		$.ajax({
			url: '/',
			type: 'GET',
			dataType: 'html'
		}).done(function(){
			var $aboutMe = $('#aboutMe')

			$aboutMe.append('<h3>I am a Front End Web Developer with the proficiency of JavaScript and Ruby. I have recently graduated from an intensive twelve week course in Web Developement at General Assembly. I am a self starter and pay strong attention to detail.</h3>').hide().fadeIn('slow')

		})
	})

$clickContactMe.one('click', function(){
	console.log('clicked')

	$.ajax({
		url: '/',
		type: 'GET',
		dataType:'html'
	}).done(function(){
		var $contactMe = $('#contactMe')

		$contactMe.append('<p>Email: mjstokes1986@att.net</p>').hide().fadeIn('slow')
		$contactMe.append('<p>Phone: (336)-693-5580</p>').hide().fadeIn('slow')
		$contactMe.append('<p>GitHub: http://github.com/MJStokes86</p>').hide().fadeIn('slow')
	})
})









})