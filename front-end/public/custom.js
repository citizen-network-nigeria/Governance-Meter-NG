/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Header Search
4. Init Menu
5. Init Home Slider
6. Init Courses Slider
7. Init Milestones
8. Init Accordions


******************************/
$('#startHomeSLider').on('click', function(){
	alert('got it here');
	initHomeSlider();
});





$(document).ready(function()
{
	"use strict";
	
	
	$(window).on('load', function()
	{
		initHomeSlider();
		projectTeamSlider();
		SapOrg()
	});

	/* 

	1. Vars and Inits

	*/

	var menu = $('.menu');
	var menuActive = false;
	var header = $('.header');
	var burger = $('.hamburger');
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});
	//initMapp();
	//initMap();
	initHeaderSearch();
	initMenu();
	//initHomeSlider();
	initCoursesSlider();
	initMilestones();
	initAccordions();
	

	/* 
	center={[7.16667, 8.83333]}
	2. Set Header

	*/

	function initMapp(){ alert('First, I got here')
		mapboxgl.accessToken="pk.eyJ1IjoiYm9sZGF2IiwiYSI6ImNrM2VicWh6aTFlNXEzanFqeHprcHZiN2sifQ.7IoFNFWJWBgFqYamicfjGw";
		var map = new mapboxgl.Map({
			container:'map',
			style:"mapbox://styles/boldav/ck3fkht630nse1cnzjpopwug1"
		});
		map.getCanvas().style.cursor='pointer';
		/* map.on('load', function(){
			map.addLayer({

			})
		}); */ alert('then, I got here')
		map.on('click', 'places', function(e){
			var meta = e.features[0].properties; console.log(meta);
		})
	}

	function initMap(){ 
		var access_token="pk.eyJ1IjoiYm9sZGF2IiwiYSI6ImNrM2VicWh6aTFlNXEzanFqeHprcHZiN2sifQ.7IoFNFWJWBgFqYamicfjGw"; 
		var maproot = $('.leaf');
		var mapOtions ={
			center: [9.0765, 7.3986],
			zoom:12
		}  
		var mymap = new L.map('leaf' ).setView([9.0765, 7.3986], 12);
		
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={'+access_token+'}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYm9sZGF2IiwiYSI6ImNrM2VicWh6aTFlNXEzanFqeHprcHZiN2sifQ.7IoFNFWJWBgFqYamicfjGw'
}).addTo(mymap);
		 
	}

	function setHeader()
	{
		if($(window).scrollTop() > 100)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Header Search

	*/

	function initHeaderSearch()
	{
		if($('.search_button').length)
		{
			$('.search_button').on('click', function()
			{
				if($('.header_search_container').length)
				{
					$('.header_search_container').toggleClass('active');
				}
			});
		}
	}

	/* 

	4. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			if($('.hamburger').length)
			{
				burger.on('click', function()
				{
					if(menuActive)
					{
						closeMenu();
					}
					else
					{
						openMenu();

						$(document).one('click', function cls(e)
						{
							if($(e.target).hasClass('menu_mm'))
							{
								$(document).one('click', cls);
							}
							else
							{
								closeMenu();
							}
						});
					}
				});
			}
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	5. Init Home Slider

	*/

	function initHomeSlider()
	{   
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:true,
				autoplayTimeout:8000,
				dots:true,
				nav:false,
				smartSpeed:1200
			});

			if($('.home_slider_prev').length)
			{
				var prev = $('.home_slider_prev');
				prev.on('click', function()
				{
					homeSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.home_slider_next').length)
			{
				var next = $('.home_slider_next');
				next.on('click', function()
				{
					homeSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	6. Init Courses Slider

	*/

	function initCoursesSlider()
	{
		if($('.courses_slider').length)
		{
			var coursesSlider = $('.courses_slider');
			coursesSlider.owlCarousel(
			{
				items:3,
				loop:true,
				autoplay:true,
				autoplayTimeout:5000,
				nav:false,
				dots:false,
				smartSpeed:1200,
				margin:10,
				responsive:
				{
					0:
					{
						items:1
					},
					768:
					{
						items:2
					},
					992:
					{
						items:3
					}
				}
			});

			if($('.courses_slider_prev').length)
			{
				var prev = $('.courses_slider_prev');
				prev.on('click', function()
				{
					coursesSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.courses_slider_next').length)
			{
				var next = $('.courses_slider_next');
				next.on('click', function()
				{
					coursesSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	6.1. Init Courses Slider

	*/

	function projectTeamSlider()
	{  
		if($('.project-staffs').length)
		{
			var coursesSlider = $('.project-staffs');
			coursesSlider.owlCarousel(
			{
				items:4,
				loop:true,
				autoplay:true,
				autoplayTimeout:5000,
				nav:false,
				dots:true,
				smartSpeed:1000,
				margin:40, 
				responsive:
				{
					0:
					{
						items:1
					},
					440:
					{
						items:2
					},
					640:
					{
						items:3
					},
					999:
					{
						items:4
					}
				}
			});

			if($('.staff-prev').length)
			{
				var prev = $('.staff-prev');
				prev.on('click', function()
				{
					coursesSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.staff-next').length)
			{
				var next = $('.staff-next');
				next.on('click', function()
				{
					coursesSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	6.2. Init Courses Slider

	*/

	function SapOrg()
	{  
		if($('.sap-org-owl').length)
		{
			var coursesSlider = $('.sap-org-owl');
			coursesSlider.owlCarousel(
			{
				items:4,
				loop:true,
				autoplay:true,
				autoplayTimeout:5000,
				nav:false,
				dots:true,
				smartSpeed:1000,
				margin:40, 
				responsive:
				{
					0:
					{
						items:2
					},
					440:
					{
						items:4
					},
					640:
					{
						items:5
					},
					999:
					{
						items:7
					}
				}
			});

			if($('.sap-org-prev').length)
			{
				var prev = $('.sap-org-prev');
				prev.on('click', function()
				{
					coursesSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.sap-org-next').length)
			{
				var next = $('.sap-org-next');
				next.on('click', function()
				{
					coursesSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	7. Initialize Milestones

	*/

	function initMilestones()
	{
		if($('.milestone_counter').length)
		{
			var milestoneItems = $('.milestone_counter');

	    	milestoneItems.each(function(i)
	    	{
	    		var ele = $(this);
	    		var endValue = ele.data('end-value');
	    		var eleValue = ele.text();

	    		/* Use data-sign-before and data-sign-after to add signs
	    		infront or behind the counter number (+, k, etc) */
	    		var signBefore = "";
	    		var signAfter = "";

	    		if(ele.attr('data-sign-before'))
	    		{
	    			signBefore = ele.attr('data-sign-before');
	    		}

	    		if(ele.attr('data-sign-after'))
	    		{
	    			signAfter = ele.attr('data-sign-after');
	    		}

	    		var milestoneScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var counter = {value:eleValue};
		    		var counterTween = TweenMax.to(counter, 4,
		    		{
		    			value: endValue,
		    			roundProps:"value", 
						ease: Circ.easeOut, 
						onUpdate:function()
						{
							document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
						}
		    		});
		    	})
			    .addTo(ctrl);
	    	});
		}
	}

	/* 

	8. Init Accordions

	*/

	function initAccordions()
	{
		if($('.accordion').length)
		{
			var accs = $('.accordion');

			accs.each(function()
			{
				var acc = $(this);

				if(acc.hasClass('active'))
				{
					var panel = $(acc.next());
					var panelH = panel.prop('scrollHeight') + "px";
					
					if(panel.css('max-height') == "0px")
					{
						panel.css('max-height', panel.prop('scrollHeight') + "px");
					}
					else
					{
						panel.css('max-height', "0px");
					} 
				}

				acc.on('click', function()
				{
					if(acc.hasClass('active'))
					{
						acc.removeClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
					else
					{
						acc.addClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
				});
			});
		}
	}

});