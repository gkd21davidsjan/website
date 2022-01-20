$(window).load(function() {
	

      
      $('.infobutton .close').click(function(e) {
        $('.infobutton').fadeOut();
      });
	
	
	$('footer span').wrapAll( "<div class='footerwrapper' />");
	var footerwidth = $('.footerwrapper').width();
	var gwidth = $('footer .csc-default').width();
	var abstandfooter = gwidth - footerwidth;
	$('footer span').each(function(index, element) {
        $(this).css('padding-left', abstandfooter / 6);
    });
	$('footer span:first').css('padding-left', 0);
	
	
	
	var windowwith = $(window).width();
	
	
	
	
	
	
	if (windowwith < 920) {
		var divs = $("footer span");
		for(var i = 0; i < divs.length; i+=3) {
		  divs.slice(i, i+3).wrapAll("<div class='row'></div>");
		}
		$('footer .row span:first').css('padding-left', 0);
	}
	
	
	
		
	
	if (windowwith > 580) {
	$(".fancybox").fancybox({
        type: "iframe",
        iframe : {
          preload: false
        }
      });
	
		
	}
	
	else {
	
	$(".fancybox").fancybox({
		'width': 250,
        'height': 250,
        type: "iframe",
        iframe : {
          preload: false
        }
      });
	
	}
	
	
	if (windowwith < 920 && windowwith > 600) {
		$('.content.right .item:odd').addClass('odd');
		
		var highest_element = 0;
	
		// Prüfe, welches Element am höchsten ist
		$('.content.right .csc-default .csc-default .item').each(function() {
		  if ($(this).height() > highest_element) {
			highest_element = $(this).height();
		  }
		});
		
		// Weise diese Höhe allen Elementen zu.
		$('.content.right .csc-default .csc-default .item').each(function() {
		  $(this).height(highest_element);
		});
	
	
	}
	
		var windowwith = $(window).width();
	if (windowwith < 920) {
		if(window.location.hash) {
		
		var hash = window.location.hash;
		$('html, body').animate({
            scrollTop: $(hash).offset().top-50},'slow');
			
	  	$(hash).find('.aufklapper').addClass('offen');
		} else {
	  
	}
		
	}
	else {
		if(window.location.hash) {
		
		var hash = window.location.hash;
		$('html, body').animate({
            scrollTop: $(hash).offset().top-92},'slow');
			
	  	$(hash).find('.aufklapper').addClass('offen');
		} else {
	  
	}
	}
	
	
	
	
});	


$(document).ready(function() {
	

	
	

	
	$(window).resize(function(e) {
		
		
	/*	var footerwidth = $('.footerwrapper').width();
		var gwidth = $('footer .csc-default').width();
		var abstandfooter = gwidth - footerwidth;
		$('footer span').each(function(index, element) {
			$(this).css('padding-left', abstandfooter / 6);
		});
		$('footer span:first').css('padding-left', 0);*/
		
		
		var windowwith = $(window).width();
	
		if (windowwith < 920 && windowwith > 600) {
			$('.content.right .item:odd').addClass('odd');
			
			var highest_element = 0;
		
			// Prüfe, welches Element am höchsten ist
			$('.content.right .csc-default .csc-default .item').each(function() {
			  if ($(this).height() > highest_element) {
				highest_element = $(this).height();
			  }
			});
			
			// Weise diese Höhe allen Elementen zu.
			$('.content.right .csc-default .csc-default .item').each(function() {
			  $(this).height(highest_element);
			});
		
		
		}
		
	});	
	
	
	
	if ($(window).width() < 920) {

			 	 
	$( "<div class='close'></div>" ).insertBefore( ".contentstart" );
	//$( "<div class='close'></div>" ).insertBefore( ".contentstart .navleft" ); 
	$('a.gallery:odd').addClass('odd');
		  
	 $('.contentstart .-left').click(function() {
				if ($(this).hasClass('open')) {
					$(this).removeClass('open');
					$('.orabutton a').css('opacity', 0);
					 
				} else {
					$('.contentstart .-right').removeClass('open');
					$(this).addClass('open');
					$('.orabutton a').css('opacity', 1);
					$('.contenthome .close').addClass('open');
				}
			});
			
			
			
	
		 $('.contentstart .-right').click(function() {
				if (!$(this).hasClass('open')) {
					$('.contentstart .-left').removeClass('open');
					$(this).addClass('open');
					$('.laborabutton a').css('opacity', 1);
					 $('.contenthome .close').addClass('open');
				}
				else {
					  $(this).removeClass('open');
					  $('.laborabutton a').css('opacity', 0);
					  
				}
				
			 
			});


	 $('.contenthome .close').click(function() {
		 $('.contenthome .close').removeClass('open');
		$('.-widthHalf div').removeClass('open');
			$('.laborabutton a').css('opacity', 0);
			$('.orabutton a').css('opacity', 0);				
	}); 
		
			
		 $('.orabutton').click(function() {
			event.preventDefault();
			$('.contentstart .-right').removeClass('open');
			$('.contentstart .-left').addClass('open');
		});
			 	
			
		 $('.laborabutton').click(function() {
			event.preventDefault();
			$('.contentstart .-left').removeClass('open');
			$('.contentstart .-right').addClass('open');
		});
			 
	
	
	$('.top').click(function() {
                setTimeout(function() {
                    $('html body').animate({
                        scrollTop: 0
                    });
                }, 500);
		});
		 
		 
		 $('.unavi4').parent().addClass('parent');
		 $('.unavi5').parent().addClass('parent');
		  $('.navimobile .nav2 .nav2link').click(function() {
			if ($(this).parent().hasClass('active')) {
				
			} else {
				event.preventDefault();
				$('.unavi3').hide();
				$('.nav2 > li').removeClass('active');
				$(this).parent().addClass('active');
				$(this).parent().find('.unavi3').show();
				return true;
				
			}
			
			
    	});
		
		$('.navimobile .nav2 .unavi3 .parent .nav3link').click(function() {
				if ($(this).parent().hasClass('active')) {
					
				} else {
					event.preventDefault();
					$('.unavi4').hide();
					$('.nav3 > li').removeClass('active');
					$(this).parent().addClass('active');
					$(this).parent().find('.unavi4').show();
					return true;
					
				}
			});
			
			
			$('.navimobile .nav2 .unavi4 .parent .nav4link').click(function() {
				if ($(this).parent().hasClass('active')) {
					
				} else {
					event.preventDefault();
					$('.unavi5').hide();
					$('.nav4 > li').removeClass('active');
					$(this).parent().addClass('active');
					$(this).parent().find('.unavi5').show();
					return true;
					
				}
			});
		
		 
	 }

	

    function mirrorActive() {
        $('.subnav .navtitle .nav2 a.active').parent().parent().find('.subnav1').addClass('active');
        $('.subnav .navtitle .nav2 a:not(.active)').parent().parent().find('.subnav1').removeClass('active');
    }
    mirrorActive();
    $('.subnav .navtitle .nav2').click(function() {
        event.preventDefault();
        if ($(this).parent().find('a').hasClass('active')) {
            $(this).parent().find('a').removeClass('active');
            $(this).parent().find('.unavi3').hide();
        } else {
            $(this).parent().find('a').addClass('active');
            $(this).parent().find('.unavi3').show();
        }
        mirrorActive();
    });
    //initialize for scrollTop in scroll function
    headerheight = $('.header').height();
	
	
	 
	
	
	
	
});

