$(document).ready(function(){

	
	openFancybox();

	function openFancybox() {
	    setTimeout( function() {$('#disclaimer').trigger('click');DD_belatedPNG.fix('.fancybox-overlay'); },1000);
	}

	$('.fancybox-inline').fancybox({
		prevEffect : 'none',
		nextEffect : 'none',
		width:670,
		height:300,
		afterLoad   : function() {
			$('.fancybox-skin').addClass('fancybox-skin-modal');        
		}
	});	
	
	var trackexception = function(){
		// add  tracking for outbound
		_gaq.push(['_setAccount', 'UA-35321769-3']);
		_gaq.push(['_trackEvent','browser','old_browser']);
	}
		
});