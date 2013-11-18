$(document).ready(function(){

	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	
	$(window).bind( 'orientationchange', function(e){
		if (isAndroid) {
			location.reload(); 
		}   
	});
	
	var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
	
	if (!(isiPad)) {
	
		
		$('.galleryimg').bind({
			
			click:function(e){
				if($(window).width() <= 480){
					e.preventDefault();
				}
			},
		
			mouseenter: function(){
			
				if($(window).width() > 480){
				
					var width = $(this).find('img').width();
					var height = $(this).find('img').height();
				
					$(this).children('.highlight').css('height', height);
					$(this).children('.highlight').css('width', width);
				
					$(this).children('.highlight').fadeIn();
				}
			},
			
			mouseleave: function(){
				if($(window).width() > 480){
					$(this).children('.highlight').fadeOut('fast');
				}
			}
		
		});
	
		$('.video').bind({
		
			touchstart: function(){
				
			},
			click:function(e){
				if($(window).width() <= 480){
					e.preventDefault();
					
					var href = $(this).attr('href');
					var width = $(this).find('img').width;
					var height = $(this).find('img').height;
					var link = href.replace('http://www.youtube.com/watch?v=', 'http://www.youtube.com/embed/').replace('&','?');
					
					var linkArray = link.split('?')
					
					var newlink = (linkArray.length > 1) ? link+'&autoplay=1' : link+'?autoplay=1'; 
					
					$(this).html('<iframe type="text/html" width="'+width+'" height="'+height+'" src="'+newlink+'" frameborder="0"/></iframe>');
				}
			},
		
			mouseenter: function(){
			
				if($(window).width() > 480){
					var width = $(this).find('img').width();
			
					var width = $(this).find('img').width();
					var height = $(this).find('img').height()+16;
				
					$(this).children('.highlight').css('height', height);
					$(this).children('.highlight').css('width', width);
					$(this).children('.highlight').css('top', -0.5*height);
				
					$(this).children('.highlight').fadeIn();
				}
			},
			mouseleave: function(){
				if($(window).width() > 480){
					$(this).children('.highlight').fadeOut();
				}
			}
		
		});
		
		$('.video2').bind({
		
			touchstart: function(){
				
			},
			click:function(e){
				if($(window).width() <= 480){
					e.preventDefault();
					
					var href = $(this).attr('href');
					var width = $(this).find('img').width;
					var height = $(this).find('img').height;
					var link = href.replace('http://www.youtube.com/watch?v=', 'http://www.youtube.com/embed/').replace('&','?');
					
					var linkArray = link.split('?')
					
					var newlink = (linkArray.length > 1) ? link+'&autoplay=1' : link+'?autoplay=1'; 
					
					$(this).html('<iframe type="text/html" width="'+width+'" height="'+height+'" src="'+newlink+'" frameborder="0"/></iframe>');
				}
			},
		
			mouseenter: function(){
			
				if($(window).width() > 480){
					var width = $(this).find('img').width();
			
					var width = $(this).find('img').width();
					var height = $(this).find('img').height();
				
					$(this).children('.highlight').css('height', height);
					$(this).children('.highlight').css('width', width);
					$(this).children('.highlight').css('top', -0.5*height+8);
				
					$(this).children('.highlight').fadeIn();
				}
			},
			mouseleave: function(){
				if($(window).width() > 480){
					$(this).children('.highlight').fadeOut();
				}
			}
		
		});
		
	}else{
		$('.galleryimg .icon').css('display','none');
	}

	if($(window).width() > 480){
		$('.galleryimg').fancybox({
		
			prevEffect : 'fade',
			nextEffect : 'fade',
			prevSpeed : 250,
			nextSpeed : 250,
			width:400,
			height:300,
			
			afterLoad   : function() {
			
				$('.fancybox-outer').append('<div class="share-box-pop"><div class="share-flyout-right"><span class="st_facebook_large trackcommon-04-facebook" displayText="Facebook"></span><span class="st_twitter_large trackcommon-04-twitter" displayText="Tweet"></span><span class="st_pinterest_large trackcommon-04-pinterest" displayText="Pinterest"></span><span class="st_googleplus_large trackcommon-04-googleplus" displayText="Google +"></span><span class="st_email_large trackcommon-04-email" displayText="Email"></span><span class="tip"></span></div><a class="fancybox-nav fancybox-share" href="javascript:;" title="Share"></a></div>'); 
				
				if(isiPad){
					$(".fancybox-inner").touchwipe({
					     wipeLeft: function() { 
					     	$.fancybox.prev();
					     },
					     wipeRight: function() { 
				    	 	$.fancybox.next();
				     	}
					});
				}
				
				$('.fancybox-share').bind({
					
					mouseenter: function(){
						stButtons.locateElements();
						$('.share-flyout-right').fadeIn('fast');
						
					}
					
				});
				
				$('.share-box-pop').bind({
					
					mouseleave: function(){
						stButtons.locateElements();
						$('.share-flyout-right').fadeOut('fast');
					}
				
				});  
				   
			}
			
		});	
		
		
		if (!(isiPad) && !(isAndroid)) {
			$('.video').attr('rel', 'media-gallery').fancybox({
				openEffect : 'none',
				closeEffect : 'none',
				prevEffect : 'none',
				nextEffect : 'none',
				closeBtn : false,
		
				arrows : true,
				helpers : {
					media : {},
					buttons : {}
				},
				afterLoad   : function() {
					$('.fancybox-outer').append('<div class="share-box-pop"><div class="share-flyout-right"><span class="st_facebook_large trackcommon-04-facebook" displayText="Facebook"></span><span class="st_twitter_large trackcommon-04-twitter" displayText="Tweet"></span><span class="st_pinterest_large trackcommon-04-pinterest" displayText="Pinterest"></span><span class="st_googleplus_large trackcommon-04-googleplus" displayText="Google +"></span><span class="st_email_large trackcommon-04-email" displayText="Email"></span><span class="tip"></span></div><a class="fancybox-nav fancybox-share" href="javascript:;" title="Share"></a></div><div class="fancybox-close"></div>'); 
					
					$('.fancybox-close').bind({
						click :function() {
							$.fancybox.close(true);
						}
					});
						
					$('.fancybox-share').bind({
						click :function() {
							$('.share-flyout-right').toggle();
						},
						mouseenter: function(){
							stButtons.locateElements();
							$('.share-flyout-right').fadeIn('fast');
						}
					});
					
					$('.share-box-pop').bind({
						mouseleave: function(){
							stButtons.locateElements();
							$('.share-flyout-right').fadeOut('fast');
						}
					});     
				}
			}); 
		}else if(isAndroid){
			
			$('.video').attr('rel', 'media-gallery').fancybox({
				openEffect : 'none',
				closeEffect : 'none',
				prevEffect : 'none',
				nextEffect : 'none',
				closeBtn : false,
				width: 720,
				height:480,
		
				arrows : true,
				helpers : {
					media : {},
					buttons : {}
				},
				afterLoad   : function() {
				
					$('.fancybox-outer').append('<div class="share-box-pop"><div class="share-flyout-right"><span class="st_facebook_large trackcommon-04-facebook" displayText="Facebook"></span><span class="st_twitter_large trackcommon-04-twitter" displayText="Tweet"></span><span class="st_pinterest_large trackcommon-04-pinterest" displayText="Pinterest"></span><span class="st_googleplus_large trackcommon-04-googleplus" displayText="Google +"></span><span class="st_email_large trackcommon-04-email" displayText="Email"></span><span class="tip"></span></div><a class="fancybox-nav fancybox-share" href="javascript:;" title="Share"></a></div><div class="fancybox-close"></div>'); 
					
					
					$('.fancybox-skin,.fancybox-wrap').css('width','720px !important');
					$('.fancybox-close').bind({
						click :function() {
							$.fancybox.close(true);
						}
					});
						
					$('.fancybox-share').bind({
						click :function() {
							$('.share-flyout-right').toggle();
						},
						mouseenter: function(){
							stButtons.locateElements();
							$('.share-flyout-right').fadeIn('fast');
						}
					});
					
					$('.share-box-pop').bind({
						mouseleave: function(){
							stButtons.locateElements();
							$('.share-flyout-right').fadeOut('fast');
						}
					});     
				}
			}); 
			
		}else{
			$('.video').attr('rel', 'media-gallery').fancybox({
				openEffect : 'none',
				closeEffect : 'none',
				prevEffect : 'none',
				nextEffect : 'none',
				closeBtn : false,
		
				arrows : true,
				helpers : {
					media : {},
					buttons : {}
				},
				afterLoad   : function() {
					$('.fancybox-outer').append('<div class="share-box-pop"><div class="share-flyout-right"><span class="st_facebook_large trackcommon-04-facebook" displayText="Facebook"></span><span class="st_twitter_large trackcommon-04-twitter" displayText="Tweet"></span><span class="st_pinterest_large trackcommon-04-pinterest" displayText="Pinterest"></span><span class="st_googleplus_large trackcommon-04-googleplus" displayText="Google +"></span><span class="st_email_large trackcommon-04-email" displayText="Email"></span><span class="tip"></span></div><a class="fancybox-nav fancybox-share" href="javascript:;" title="Share"></a></div><div class="fancybox-closer"></div>'); 
					
					$('.fancybox-closer').bind({
						click :function() {
							$.fancybox.close(true);
						}
					});
					
					$('.fancybox-share').bind({
						click :function() {
							$('.share-flyout-right').toggle();
						},
						mouseenter: function(){
							stButtons.locateElements();
							$('.share-flyout-right').fadeIn('fast');
						}
					});
					
					$('.share-box-pop').bind({
						mouseleave: function(){
							stButtons.locateElements();
							$('.share-flyout-right').fadeOut('fast');
						}
					});     
				}
			});
		} 
	}
	
		
});