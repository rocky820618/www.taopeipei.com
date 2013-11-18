$(document).ready(function(){

	$('.trackfeature-experience').mousedown(function(){
		// experience clicked 
		var url = $(this).attr('href');
		_gaq.push(['_setAccount', 'UA-35321769-3']);
		_gaq.push(['_trackEvent','outbound','outbound_experience',url]);
	});
	
	$('.trackfeature-performance').mousedown(function(){
		// performance clicked 
		var url = $(this).attr('href');
		_gaq.push(['_setAccount', 'UA-35321769-3']);
		_gaq.push(['_trackEvent','outbound','outbound_performance',url]);
	});

	$('.trackfeature-explore').mousedown(function(){
		// explore clicked 
		var url = $(this).attr('href');
		_gaq.push(['_setAccount', 'UA-35321769-3']);
		_gaq.push(['_trackEvent','outbound','outbound_explore',url]);
	});
	
	
	$('.trackfeature-follow').mousedown(function(){
		// follow clicked 
		var url = $(this).attr('href');
		_gaq.push(['_setAccount', 'UA-35321769-3']);
		_gaq.push(['_trackEvent','outbound','outbound_follow',url]);
	});
	
	$('.trackfeature-video').click(function(){
		// video clicked 
		var name = $(this).attr('title');
		_gaq.push(['_setAccount', 'UA-35321769-3']);
		_gaq.push(['_trackEvent','video','video_load',name]);
	});
	
	$('.trackfeature-gallery').click(function(){
		// gallery item clicked 
		var url = $(this).attr('href');
		_gaq.push(['_setAccount', 'UA-35321769-3']);
		_gaq.push(['_trackEvent','gallery','gallery_image-click',url]);
	});
	
	$('.trackyoutube-juke-r').click(function(){
		// juke-r youtube 
		_gaq.push(['_setAccount', 'UA-35321769-3']);
		_gaq.push(['_trackEvent','outbound','outbound_nissanjuke']);
	});

	$('.trackyoutube-leaf').click(function(){
		// juke-r youtube 
		_gaq.push(['_setAccount', 'UA-35321769-3']);
		_gaq.push(['_trackEvent','outbound','outbound_nissannewsroom']);
	});
	
	
});

var trackfeaturegalleryprev = function(){
	// previous clicked 
	var name = $('.fancybox-title span').html();
	_gaq.push(['_setAccount', 'UA-35321769-3']);
	_gaq.push(['_trackEvent','gallery','gallery_arrow-left',name]);
			
	
}

var trackfeaturegallerynext = function(){
	// next clicked 
	var name = $('.fancybox-title span').html();
	_gaq.push(['_setAccount', 'UA-35321769-3']);
	_gaq.push(['_trackEvent','gallery','gallery_arrow-right',name]);
	
}