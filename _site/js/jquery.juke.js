$(document).ready(function(){

	$('#modal-jukebox-go').click(function(){
		var goto = $('#change-country').val();
		if(goto != ""){
			trackjuke(goto);
			setTimeout(function() {window.open(goto);}, 200);
		}
		return false;
		
	});

	$('.fancybox-inline').fancybox({
		prevEffect : 'none',
		nextEffect : 'none',
		afterLoad   : function() {
			$('.fancybox-skin').addClass('fancybox-skin-modal');        
		}
	});	
	
	var trackjuke = function(goto){
		// add  tracking for outbound
		_gaq.push(['_setAccount', 'UA-35321769-3']);
		_gaq.push(['_trackEvent','outbound','outbound_explore',goto]);
	}
		
});