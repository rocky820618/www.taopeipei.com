$(document).ready(function(){

	
	
	var tag = getUrlVars()["tag"];
	
	var activefilter = (tag != undefined) ? tag : "all";
	
	if(activefilter != 'performance' && activefilter != 'technology' && activefilter != 'design' && activefilter != 'sustainability'){
		activefilter = "all";
	}
	
	$('.links li a').click(function(){
		$('.links li a').removeClass('active');
		$(this).addClass('active');
		
		activefilter = $(this).attr('data-id');
		
		// cycle through elements and turn on and off
		
		var counter = 0;
		$(".features li").each(function(n) {
			var data_id = $(this).attr('data-id');
			
			var data_id_array = data_id.split(',');
			
			//console.log(data_id_array);
			//console.log($.inArray(activefilter, data_id_array));
			
			$(this).fadeOut(10);
			
			if(activefilter == 'all' || $.inArray(activefilter, data_id_array) > -1 ){
				counter++;
				$(this).delay(25*counter).fadeIn(250);
			}else{
				$(this).fadeOut(10);
			}
			
		});
		
		
	});
	
	$(".features li").css('display','none');
	$('.links li a#'+activefilter).trigger('click');
	
	
	$('.fancybox-inline').fancybox({
		prevEffect : 'none',
		nextEffect : 'none',
		afterLoad   : function() {
			$('.fancybox-skin').addClass('fancybox-skin-modal');        
		}
	});
		
});

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}