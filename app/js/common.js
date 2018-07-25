$(function() {
	// mixItUp
	var mixer = mixitup('.portfolio_tabel'); 
	mixer.filter();
	mixer.filter('all');

	// scrolToId
	$('.top_mnu a[href^="#"]').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    }
    return false;
	});

	// magnific
	$('.img_popup').magnificPopup({type:'image'});

	// animation elements
	$('.portfolio_wrap_all').animated('fadeIn');

	$('.animation_2').animated('fadeInLeft');
	$('.animation_3').animated('fadeInRight');
	$('.animation_1').animated('flipInY');

	$('.left .resume_item, .left .resume_icon, .labe_skills').animated('fadeInLeft');
	$('.right .resume_item, .right .resume_icon, .edu_wrap').animated('fadeInRight');

	$('.top_text h1').animated('fadeInDown');
	$('.top_text p, .section_header, .cv_download').animated('fadeInUp');

	$('.contact_box_wrap').animated('fadeInDown');
	$('.main_form').animated('fadeInUp');

	// menu open & close
	$('.nav_item li').click(function() {
		$('.nav_item li').removeClass('active');
		$(this).toggleClass('active');
	})

	// open slowly portfolio item
	$(".s_portfolio").waypoint(function() {
		$(".s_portfolio .portfolio_item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("card-on");
			}, 200*index);
		});	
	},
	{offset: "35%"}
	);

	// screen height detected
	function heightDetect() {
		$('.main_head').css('height', $(window).height());
	}

	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	// menu items open & close
	$('.toggle_mnu').click(function() {
	  $('.tog_mnu').toggleClass('on');
	  if($('.tog_mnu').hasClass('on')) {
			$('.top_mnu').fadeIn(400);
			$('.top_mnu li a').addClass('fadeInUp animated');
			$('.top_text').addClass('h_opa');
		} else {
			$('.top_mnu').fadeOut(400);
			$('.top_mnu li a').removeClass('fadeInUp animated');
			$('.top_text').removeClass('h_opa');
		}
	  return false;
	});

	$('.top_mnu li a').click(function() {
		$('.tog_mnu').toggleClass('on');
		$('.top_mnu').fadeOut(400);
		$('.top_text').removeClass('h_opa');
	})

	//E-mail Ajax Send
	$("#callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert('Thanks');
		});
		return false;
	});

	// Scroll chrome slowly
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

// preloader 
$(document).ready(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
})
