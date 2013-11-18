$(document).ready(function(){
	
	$('#modal-project370z-go').click(function(){
		var goto = $('#change-country').val();
		if(goto != ""){
			track370(goto);
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
	
	var track370 = function(goto){
		// add  tracking for outbound
		_gaq.push(['_setAccount', 'UA-35321769-3']);
		_gaq.push(['_trackEvent','outbound','outbound_explore',goto]);
	}
		
});

