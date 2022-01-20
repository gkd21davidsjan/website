
    $(document).ready(function() {
		
			if(!localStorage.getItem('gkdcookies')) {
	  $('#cookieBanner').fadeIn();
	  }
	  
	  $('#cookieBanner button').click(function(e) {
		localStorage.setItem('gkdcookies', 'accepted');
		$('#cookieBanner').fadeOut();
	  });
		
		$('#example').paginate({
			perPage: 20,
			paginatePosition: ['top'],
			autoScroll: false
		});
		var num = $('nav.paginate-pagination ul li').length;
		if (num == 2 || num ==3) {
		  $('nav.paginate-pagination').css('display','none');
		}
		
		
		var heightnav = $(window).height();
		$('.navitopmob').css('min-height',heightnav - 100);
		
		
		$('.klapptitel').unwrap();
		$('.klapptitel').each(function(){
			$(this).next('div').andSelf().wrapAll('<div class="archiv aufklapper"/>');
		});
			
		$('.csc-sitemap').each(function() {
			var abschnitt = $(this).prev();
			abschnitt.prependTo(this);
		});
		
		$('.welcome .close').click(function() {
			$('.welcome').fadeOut();
			localStorage.setItem('welcome','done');
		});
		
		if (localStorage.getItem('welcome') !== 'done') {
			$('.welcome').show();
		}
		
		if (window.location.hash === "#again"){ 
			$('.welcome').hide();
	   	}
		
		$('.gallery.film').click(function() {
            $('#player').hide();
		});
		
		$('.externvideo').click(function() {
			$('#player').hide();
            $(this).parent().parent().parent().find('#player').fadeIn();
		});
		
		
		
		$('#start .-logo a').each(function(index, element) {
            var linktext = $(this).text();
			var linktext = linktext.replace(/(.{1})/g, "$1<br>");
			$(this).html(linktext);
        });
	
		function clickdefault(){
			if (!$(this).hasClass('nav_returnlink')) {
                    event.preventDefault();
             }
              $('.nav_returnlink').removeClass('nav_returnlink');
              $(this).addClass('nav_returnlink');
		}
		
		
		/*$('.searchicon').click(function(e) {
			 e.preventDefault();
			$(this).toggleClass('active');
			
			$('.search').toggleClass('active');
			if (!$('.overlay').hasClass('active')) {
				$('.overlay').addClass('active');
			} else {
				$('.overlay').removeClass('active');
			}
		});*/
		
		$('.navbutton').click(function() {
			$(this).toggleClass('active');
			$('.navitopmob').toggleClass('active');
			if (!$('.searchicon').hasClass('active')) {
				$('.overlay').toggleClass('active');
			}
			else {
				$('.searchicon, .search ').removeClass('active');
			}
		});
				
		$(".lightboxvideo").click(function() {
			$.imageLightbox({
				'padding': 0,
				'autoScale': false,
				'transitionIn': 'none',
				'transitionOut': 'none',
				'title': this.title,
				'width': 640,
				'height': 385,
				'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
				'type': 'swf',
				'swf': {
					'wmode': 'transparent',
					'allowfullscreen': 'true'
				},
				'helpers': {
				'overlay': {
					'locked': false
				}
			}
			});
			return false;
		});

		
		$('.nav2 > li > a').click(function(e) {
			   //clickdefault();
			   //$('.nav2 li').removeClass('active');
              //$(this).parent().addClass('active');
			  
		});
		
		$('.unavi3 > li > a').click(function(e) {
			  //clickdefault();
			  //$('.unavi3 li').removeClass('active');
              //$(this).parent().addClass('active');
			  
		});
				
		$('.unavi4 > li > a').click(function(e) {
			  //clickdefault();
			  //$('.unavi4 li').removeClass('active');
              //$(this).parent().addClass('active');
			  
		});
		$('.navtitle a.aktiv').parent().parent().addClass('open');
		
		$('.ora .navtitle').click(function(event) {
			$('.labora').removeClass('open');
			  $(this).parent().toggleClass('open');			  
		});
		
		$('.labora .navtitle').click(function(event) {
			$('.ora').removeClass('open');
			  $(this).parent().toggleClass('open');			  
		});
		
		$('.aufklapper .klapptitel').click(function(event) {
			  $(this).parent().toggleClass('offen');			  
		});

		/*$('.gallery img').each(function() {
			var quelle = $(this).attr('src');
			$(this).parent().attr('href', quelle);			  
		});*/
		$('.gallery:nth-of-type(2n)').addClass('outer');
		
		
	
		if ($(window).width() > 920) {
			var heightwindo = $(window).height();
			var mainheight = heightwindo - 149;
		}
		else if ($(window).width() < 482) {
			var heightwindo = $(window).height();
			var mainheight = heightwindo - 162;
			
			$('#start .-logo>.right, #start .-logo>.left').click(function() {
				clickdefault();
			});
		}
		
		else {
			var heightwindo = $(window).height();
			var mainheight = heightwindo - 179;
			
			$('#start .-logo>.right, #start .-logo>.left').click(function() {
				clickdefault();
			});
		
		}
		
		
		$('.contentstart').height(mainheight);
		
		$('.content.middle img').wrap('<div class="mittelbild"></div>');
		
		$('.vorschaubild img').each(function(index, element) {
            $(this).unwrap();
        });
		
		$('.vorschaubild').each(function(i, v) {
            $(v).find('a').attr('rel', 'gallery'+i);
			$(v).find('a:first').addClass('first');
        });
		
		
		
		var list = document.getElementsByTagName("vorschaubild"); // oder wie du auch immer deine li-Liste bekommst...
		for (var i = 0; i < list.length; i++){
			list[i].className = "class" + i;
		}
				
		
		$('.-pattern ul ').each(function(index, element) {
			var navheight = $(this).height();
			var navabstand = (mainheight - navheight) / 2;
			var anzahl = $(this).parent().find('.nav2 > li').length;
			var liheight = mainheight / anzahl;
			$(this).parent().find('.nav2 > li').height(liheight - 5);
			$(this).parent().find('.nav2 > li').css('line-height', liheight - 5+'px');
		});
		
		// bg startseite
		var classes     = new Array ('lernen', 'unterricht');
		var length      = classes.length;
		var links       = $('.contentstart');
		$.each( links, function(key, value) {
			$(value).addClass( classes[ Math.floor ( Math.random() * length ) ] );
		});
		
		 $(window).resize(function(e) {
			 
			 var heightnav = $(window).height();
			$('.navitopmob').css('min-height',heightnav - 100);
			 
			 
			 
			if ($(window).width() > 920) {
			var heightwindo = $(window).height();
			var mainheight = heightwindo - 149;
		}
		else if ($(window).width() < 482) {
			var heightwindo = $(window).height();
			var mainheight = heightwindo - 162;
			
			$('#start .-logo>.right, #start .-logo>.left').click(function() {
				clickdefault();
			});
		}
		
		else {
			var heightwindo = $(window).height();
			var mainheight = heightwindo - 179;
			
			$('#start .-logo>.right, #start .-logo>.left').click(function() {
				clickdefault();
			});
		
		}
		
			$('.contentstart').height(mainheight);
			$('.-pattern ul ').each(function(index, element) {
				var navheight = $(this).height();
				var navabstand = (mainheight - navheight) / 2;
				var anzahl = $(this).parent().find('.nav2 > li').length;
				var liheight = mainheight / anzahl;
				$(this).parent().find('.nav2 > li').height(liheight - 5);
				$(this).parent().find('.nav2 > li').css('line-height', liheight - 5+'px');
				
			});
				 
	     });
		
		
		if ($(window).width() > 920) {
		
			$('#start .-right').hover(function(e) {
				$('.navright').css('visibility', 'visible');
				$('#start .-logo a.right').css('opacity', '1');
				$('.navleft').css('visibility', 'hidden');
			});
			
			$('#start .-logo a.right').hover(function(e) {
				$('.navright').css('visibility', 'visible');
				$('.navleft').css('visibility', 'hidden');
			});
			
			$(".-right").mouseenter(function(){
	
			}).mouseleave(function(){
				$('.navright').css('visibility', 'hidden');
				$('#start .-logo a.right').css('opacity', '0');
			});
			
			$("#start .-logo a.right").mouseenter(function(){
				$('#start .-logo a.right').css('opacity', '1');
				$('#start .-logo a.left').css('opacity', '0');
			}).mouseleave(function(){
				
			});
			
			$('#start .-left').hover(function(e) {
				$('.navleft').css('visibility', 'visible');
				$('#start .-logo a.left').css('opacity', '1');
				$('.navright').css('visibility', 'hidden');
			});
			
			$('#start .-logo a.left').hover(function(e) {
				$('.navleft').css('visibility', 'visible');
				$('.navright').css('visibility', 'hidden');
			});
			
			$(".-left").mouseenter(function(){
	
			}).mouseleave(function(){
				$('.navleft').css('visibility', 'hidden');
				$('#start .-logo a.left').css('opacity', '0');
			});
			
			$("#start .-logo a.left").mouseenter(function(){
				$('#start .-logo a.left').css('opacity', '1');
				$('#start .-logo a.right').css('opacity', '0');
			}).mouseleave(function(){
				
			});
				
		}
	});
