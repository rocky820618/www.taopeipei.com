// set the Position of the scroller
var currentPos = 0;
var lastPos = 6;

$(document).ready(function(){

	currentPos = 0;
	lastPos = 6;

	taglines();
	
	if(currentPos == 0){
		$('html, body').animate({ scrollTop: 0}, 0);
	}
	$('.prev-btn').animate({ opacity: 0.15}, 500);
	
	
	
	
	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	   	  currentPos = lastPos;
	       $('.next-btn').animate({ opacity: 0.15}, 250, function(){
		       	$('.next-btn').css('cursor','default');
		       	$('.next-btn').css('background-position','-1000px -57px');
	       });
	       
	   }else if($(window).scrollTop() == 0) {
	   	  currentPos = 0;
	       $('.prev-btn').animate({ opacity: 0.15}, 250, function(){
		       	$('.prev-btn').css('cursor','default');
		       	$('.prev-btn').css('background-position','-1000px 0px');
	       });
	   }else{
	   		$('.prev-btn').css('opacity','1')
	   	    $('.prev-btn').css('cursor','pointer');
	   	    
	   	    $('.next-btn').css('opacity','1')
	   	    $('.next-btn').css('cursor','pointer');
	   }
	});
	
	setTimeout(function() 
	{
		$('.initialload').animate({opacity: 1}, 500, function(){ $('.initialloadbtn').css('opacity','1');taglines();});
	}, 400);

	$(window).resize(function() {
	  	taglines();  
	});
	
	var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	
	if(jQuery.browser.mobile){
		$('.controller').css('display','none');
	}else if (isiPad || isAndroid) {
		$('.controller').css('display','none');
	}else{
	 	
	 	
	 	
	 	$('.prev-btn').bind({
	 		
	 		click:function(e){
	 			e.preventDefault();
	 			scroll($(this).attr('id'));
	 		},
	 		
	 		mouseenter: function(e){
	 			if(currentPos != 0){
	 				$(this).css('cursor','pointer');
	 				$(this).css('background-position','-1086px 0px');
	 			}
	 		},
	 		
	 		mouseleave: function(e){
	 			if(currentPos != 0){
	 				$(this).css('cursor','pointer');
	 				$(this).css('background-position','-1000px 0px');
	 			}
	 		}	
	 	});
	 	
	 	$('.next-btn').bind({
	 	
	 		click:function(e){
	 			e.preventDefault();
	 			scroll($(this).attr('id'));
	 		},
	 	
	 		mouseenter: function(e){
	 			if(currentPos != lastPos){
	 				$(this).css('cursor','pointer');
	 				$(this).css('background-position','-1086px -57px');
	 			}
	 		},
	 		
	 		mouseleave: function(e){
	 			if(currentPos != lastPos){
	 				$(this).css('cursor','pointer');
	 				$(this).css('background-position','-1000px -57px');
	 			}
	 		}	
	 	});
	 	  
	}
	
	$('.fancybox-inline').fancybox({
		prevEffect : 'none',
		nextEffect : 'none',
		afterLoad   : function() {
			$('.fancybox-skin').addClass('fancybox-skin-modal');        
		}
	});
	
	$('#pos-01,#pos-03,#pos-05,#pos-07').bind({
	
		click: function(){
			if($(window).width() <= 768){
				var url = $(this).find('a').attr('href');
				window.location.href = url;
			}
		},
		
		mouseenter: function(e){
			if($(window).width() <= 768){
				$(this).css('cursor','pointer');
			}
		},
		mouseleave: function(e){
			$(this).css('cursor','default');
			
		}
		
	});
		
	$('.panel').bind({
	
		mouseenter: function(e){
			if($(window).width() >= 768){
				var width = $(this).width();
				var height = $(this).height();
		
				$(this).children('.panelover').css('width', width);
				$(this).children('.panelover').css('height', height);
				$(this).children('.panelover').fadeIn(250);
			}
		
		},
		mouseleave: function(e){
			if($(window).width() >= 768){
				$(this).children('.panelover').fadeOut(0);
			}
		}
	
	});
	
	$('.panelover').bind({
		
		click: function(e){
			if($(window).width() >= 768){
				var url = $(this).find('a').attr('href');
				$(this).fadeOut(50);
				window.location.href = url;
				
			}
		}
	});
	
		
		
});

function scroll(direction) {
	 	
    var scroll;
    var  i;
    var positions = [];
    var here = $(window).scrollTop();
    var collection = $('.slider');
   

    collection.each(function() {
    
    	positions.push(parseInt($(this).offset()['top'],10));
    });

	for(i = 0; i < positions.length; i++) {
        if (direction == 'next' && positions[i] > here) { 
        	scroll = positions[i];break;
        	//scroll = collection.get(i); break; 
       	}
        if (direction == 'prev' && i > 0 && positions[i] >= here) { 
        	scroll = positions[i-1];break;
        	//scroll = collection.get(i-1); break; 
        }
    }

	if (scroll) {
    	$('html, body').animate({ scrollTop: scroll}, 250);
        
        if(direction == 'next'){
        	if(currentPos < lastPos){
        		currentPos++;
        	}
        }else{
        	currentPos--;
        	
        }
        
        
    }else{
    	
    	
    	if(currentPos <= 2){
    		$('html, body').animate({ scrollTop: 0}, 250);
    		currentPos = 0;
    	}
    	
    	if( currentPos == 0){
    		$('.prev-btn').animate({ opacity: 0.15}, 250, function(){
    			$('.prev-btn').css('cursor','default');
    			$('.prev-btn').css('background-position','-1000px 0px');
    		});
    		
    	}else{
    		$('.prev-btn').animate({ opacity: 1}, 100);
    		
    	}
    	
    	if( currentPos == lastPos){
    		$('.next-btn').animate({ opacity: 0.15}, 250, function(){
    			$('.next-btn').css('cursor','default');
    			$('.next-btn').css('background-position','-1000px -57px');
    		});
    		
    	}else{
    		$('.next-btn').animate({ opacity: 1}, 100);
    	
    	}
    	
    	
    	
    }

	if( currentPos == 0){
		$('.prev-btn').animate({ opacity: 0.15}, 250, function(){
			$('.prev-btn').css('cursor','default');
			$('.prev-btn').css('background-position','-1000px 0px');
		});
		
	}else{
		$('.prev-btn').animate({ opacity: 1}, 100);
		
	}
	
	if( currentPos == lastPos){
		$('.next-btn').animate({ opacity: 0.15}, 250, function(){
			$('.next-btn').css('cursor','default');
			$('.next-btn').css('background-position','-1000px -57px');
		});
		
	}else{
		$('.next-btn').animate({ opacity: 1}, 100);
		
	}

    //return false;
}

function taglines(){

	var lang = $('#language-selector').attr('data-language');

	var feature1image_true_height = 683; // enter true value height here

	var height1 = $('#feature1right').height();
	var factor = 1;
	
	if(lang == 'fr'){
		factor = 0.82;
	}else if(lang == 'ru'){
		factor = 0.80;
	}else if(lang == 'it'){
		factor = 0.80;
	}else if(lang == 'pt'){
		factor = 0.85;
	}else if(lang == 'de'){
		factor = 0.74;
	}else if(lang == 'es'){
		factor = 0.82;
	}
	 
	$('#tag1').css('padding-top', 0.88*height1+'px');
	$('#tag1').css('font-size', factor*1.31292*height1/feature1image_true_height+'em');
	
	if(lang == 'it'){	
	
		addfactor = 0.95;
		
		$('#wi1').css('font-size', factor*2*height1/feature1image_true_height+'em');
		$('#wi1').css('padding-top', 0.057*height1+'px');
		$('#st1-1').css('font-size', addfactor*factor*2*height1/feature1image_true_height+'em');
		$('#st1-1').css('padding-top', 0.057*height1+'px');
		$('#st2-1').css('font-size', factor*2*height1/feature1image_true_height+'em');
		$('#st2-1').css('padding-top', 0.102*height1+'px');
		$('#st3-1').css('font-size', factor*1.25*height1/feature1image_true_height+'em');
		$('#st3-1').css('padding-top', 0.121*height1+'px');
	
	}else{
	
	
		$('#wi1').css('font-size', factor*2*height1/feature1image_true_height+'em');
		$('#wi1').css('padding-top', 0.057*height1+'px');
		$('#st1-1').css('font-size', factor*2*height1/feature1image_true_height+'em');
		$('#st1-1').css('padding-top', 0.057*height1+'px');
		$('#st2-1').css('font-size', factor*2*height1/feature1image_true_height+'em');
		$('#st2-1').css('padding-top', 0.102*height1+'px');
		$('#st3-1').css('font-size', factor*1.25*height1/feature1image_true_height+'em');
		$('#st3-1').css('padding-top', 0.161*height1+'px');
	}
	
	if(lang == 'zh'){	
		$('#st3-1').css('font-size', factor*1.25*height1/feature1image_true_height+'em');
		$('#st3-1').css('padding-top', 0.121*height1+'px');
	}
	
	if($(window).width() > 768){
		$('#split1').css('margin-top', 0.86*height1+'px');
	}else if($(window).width() > 480){
		$('#split1').css('margin-top', 0.80*height1+'px');
	}else{
		$('#split1').css('margin-top', 0.76*height1+'px');
	}
	
	
	var feature2image_true_height = 683; // enter true value height here
	
	var height2 = $('#feature2full').height(); 
	$('#tag2').css('padding-top', 0.89*height2+'px');
	$('#tag2').css('font-size', factor*1.31292*height2/feature2image_true_height+'em');
	
	
	if(lang == 'ru' || lang == 'it'){	
	
		addfactor = 0.75;
	
		$('#wi2').css('font-size', addfactor*factor*3.3*height2/feature2image_true_height+'em');
		$('#wi2').css('padding-top', 0.285*height2+'px');
		$('#st1-2').css('font-size', addfactor*factor*2.83*height2/feature2image_true_height+'em');
		$('#st1-2').css('padding-top', 0.370*height2+'px');
		$('#st2-2').css('font-size', addfactor*factor*2.83*height2/feature2image_true_height+'em');
		$('#st2-2').css('padding-top', 0.430*height2+'px');
		$('#st3-2').css('font-size', addfactor*factor*2.83*height2/feature2image_true_height+'em');
		$('#st3-2').css('padding-top', 0.490*height2+'px');
		$('#st4-2').css('font-size', factor*1.25*height2/feature2image_true_height+'em');
		$('#st4-2').css('padding-top', 0.580*height2+'px');
		
		$('#split2').css('margin-top', 0.646*height2+'px');
	
	}else if(lang == 'de'){	
	
		addfactor = 0.88;
	
		$('#wi2').css('font-size', addfactor*factor*3.3*height2/feature2image_true_height+'em');
		$('#wi2').css('padding-top', 0.285*height2+'px');
		$('#st1-2').css('font-size', addfactor*factor*2.83*height2/feature2image_true_height+'em');
		$('#st1-2').css('padding-top', 0.370*height2+'px');
		$('#st2-2').css('font-size', addfactor*factor*2.83*height2/feature2image_true_height+'em');
		$('#st2-2').css('padding-top', 0.430*height2+'px');
		$('#st3-2').css('font-size', addfactor*factor*2.83*height2/feature2image_true_height+'em');
		$('#st3-2').css('padding-top', 0.490*height2+'px');
		$('#st4-2').css('font-size', factor*1.25*height2/feature2image_true_height+'em');
		$('#st4-2').css('padding-top', 0.580*height2+'px');
		
		$('#split2').css('margin-top', 0.646*height2+'px');
	
	}else{
		
		$('#wi2').css('font-size', factor*3.3*height2/feature2image_true_height+'em');
		$('#wi2').css('padding-top', 0.278*height2+'px');
		$('#st1-2').css('font-size', factor*2.83*height2/feature2image_true_height+'em');
		$('#st1-2').css('padding-top', 0.370*height2+'px');
		$('#st2-2').css('font-size', factor*2.83*height2/feature2image_true_height+'em');
		$('#st2-2').css('padding-top', 0.430*height2+'px');
		$('#st3-2').css('font-size', factor*2.83*height2/feature2image_true_height+'em');
		$('#st3-2').css('padding-top', 0.490*height2+'px');
		$('#st4-2').css('font-size', factor*1.25*height2/feature2image_true_height+'em');
		$('#st4-2').css('padding-top', 0.580*height2+'px');
		
		$('#split2').css('margin-top', 0.646*height2+'px');
	}
	
	var feature4image_true_height = 683; // enter true value height here
	
	var height4 = $('#feature4right').height(); 
	$('#tag4').css('font-size', factor*1.31292*height4/feature4image_true_height+'em');
	$('#tag4').css('padding-top', 0.88*height4+'px');
	
	$('#wi4').css('font-size', factor*2*height4/feature4image_true_height+'em');
	$('#wi4').css('padding-top', 0.057*height4+'px');
	$('#st1-4').css('font-size', factor*2*height4/feature4image_true_height+'em');
	$('#st1-4').css('padding-top', 0.057*height4+'px');
	$('#st2-4').css('font-size', factor*2*height4/feature4image_true_height+'em');
	$('#st2-4').css('padding-top', 0.102*height4+'px');
	$('#st3-4').css('font-size', factor*1.25*height4/feature4image_true_height+'em');
	if(lang == 'fr' || lang == 'it'){
		$('#st3-4').css('padding-top', 0.191*height4+'px');
	}else{
		$('#st3-4').css('padding-top', 0.161*height4+'px');
	}
	
	
	
	if($(window).width() > 768){
		$('#split4').css('margin-top', 0.86*height4+'px');
	}else if($(window).width() > 480){
		$('#split4').css('margin-top', 0.80*height4+'px');
	}else{
		$('#split4').css('margin-top', 0.76*height4+'px');
	}
	
	var feature7image_true_height = 683; // enter true value height here
	
	var height7 = $('#feature7right').height(); 
	$('#tag7').css('font-size', factor*1.31292*height7/feature7image_true_height+'em');
	$('#tag7').css('padding-top', 0.88*height7+'px')
	
	
	$('#wi7').css('font-size', factor*2*height7/feature7image_true_height+'em');
	$('#wi7').css('padding-top', 0.057*height7+'px');
	$('#st1-7').css('font-size', factor*2*height7/feature7image_true_height+'em');
	$('#st1-7').css('padding-top', 0.057*height7+'px');
	$('#st2-7').css('font-size', factor*2*height7/feature7image_true_height+'em');
	$('#st2-7').css('padding-top', 0.102*height7+'px');
	$('#st3-7').css('font-size', factor*1.25*height7/feature7image_true_height+'em');
	
	if(lang == 'fr'){
		$('#st3-7').css('padding-top', 0.181*height7+'px');
	}else if(lang == 'ru'){
		$('#st3-7').css('padding-top', 0.197*height7+'px');
	}else{
		$('#st3-7').css('padding-top', 0.161*height7+'px');
	}
	
	if($(window).width() > 768){
		$('#split7').css('margin-top', 0.86*height7+'px');
	}else if($(window).width() > 480){
		$('#split7').css('margin-top', 0.80*height7+'px');
	}else{
		$('#split7').css('margin-top', 0.76*height7+'px');
	}
	
	
}