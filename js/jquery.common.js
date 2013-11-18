$(document).ready(function(){
	$('a[rel*=external]').click( function() {
	       window.open(this.href);
	       return false;
	});
		
	$('.share').bind({
		mouseenter: function(){
			$('.share-flyout').fadeIn('fast');
		}
	});
	
	$('.share-box').bind({
		mouseleave: function(){
			$('.share-flyout').fadeOut('fast');
		}
	});

	// addition of jPanelMenu
	var jPM = $.jPanelMenu({
	    menu: '#menu',
	    trigger: '.menu-trigger',
	    direction: 'right',
	    openPosition: '300px'
	});
	
	$('.menu-trigger').addClass('trackcommon-nav-mobile-icon');
	
	$('.fancybox-inline').fancybox({
		prevEffect : 'none',
		nextEffect : 'none',
		afterLoad   : function() {
			$('.fancybox-skin').addClass('fancybox-skin-modal');        
		}
	});
	
	jPM.on();	
		
	// accordian menu
	
	var accordion_head = $('.accordion > li > a'),
	accordion_body = $('.accordion li > .sub-menu');
	 
	accordion_head.on('click', function(event) {
		 
		if ($(this).attr('class') != 'active'){
            accordion_body.slideUp('normal');
            $(this).next().stop(true,true).slideToggle('normal');
            accordion_head.removeClass('active');
            $(this).addClass('active');
        }else{
        	accordion_body.slideUp('normal');
        	$(this).removeClass('active');
        }
	 
	});
		
	var current = $('#language-selector').attr('data-language');
	
	$('.ls-link').each(function() {
		var lang = $(this).attr('data-language');
		if(lang == current){
			$(this).addClass('ls-link-active');
		}
	
	});
	
	$("meta[property='og\\:url']").attr("content", $(location).attr('href'));
	
		
});

function changeLanguage(to){
	
	var current = $('#language-selector').attr('data-language');

 	var from = document.location.href;
 		from = from.replace('feature/the_kings_of_new_york.html', 'index.html');
 	var url = from.replace('/' + current + '/', to);
 	document.location = url;    
}