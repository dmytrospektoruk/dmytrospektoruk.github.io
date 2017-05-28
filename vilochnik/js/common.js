$(function() {

	$('.btn_main_h').magnificPopup({
		type: 'inline',
		preloader: false,
		removalDelay: 300,
		mainClass: 'mfp-with-zoom',
	});

	$('.course a').magnificPopup({
		type: 'inline',
		preloader: false,
		removalDelay: 300,
		mainClass: 'mfp-with-zoom',
	});

	$('.s_news').parallax({
		imageSrc: 'img/news_bg.jpg',
		speed: .4
	});

	$('.garanty').parallax({
		imageSrc: 'img/garanty_bg.jpg',
		speed: .4
	});

	$('.news_item').hover(function() {
		$(this).children('.news_overlay').stop().animate({opacity: .45}, 200);

	}, function() {
		$(this).children('.news_overlay').stop().animate({opacity: 0}, 200);
	});

	$('.clients_wrap').owlCarousel({
		items: 1,
		nav: true,
		navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
		dots: true
	});

	var waypointsvg = new Waypoint({

		element: $(".process"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".process .p_item_wrap").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "svg" + index
						});
						ths.children(".p_item_cont2, .p_item_cont").css("opacity", 1);
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '35%'
	});


	$(".worked").waypoint(function() {
		$(".worked .w_item_prap").removeClass("off_l").removeClass("off_r");
	}, {
		offset : "50%"
	});

	$(".s_news").waypoint(function() {
		$(".s_news .news_item_wrap").removeClass("on_l").removeClass("on_r");
	}, {
		offset : "50%"
	});

	$(".s_help").waypoint(function() {
		$(".s_help article").removeClass("off_l").removeClass("off_r");
		$(".s_help .feedback").removeClass("op_anim");
	}, {
		offset : "40%"
	});

	$(".garanty").waypoint(function() {
		$(".garanty .garant_wrap").removeClass("off_r");
		$(".garanty .feedback").removeClass("op_anim");
	}, {
		offset : "30%"
	});

	$(".s_clients").waypoint(function() {
		$(".s_clients .clients_wrap").removeClass("scale_anim").removeClass("op_anim");
	}, {
		offset : "30%"
	});

	$(".s_bonus").waypoint(function() {
		$(".s_bonus p").removeClass("scale_anim").removeClass("op_anim");
	}, {
		offset : "50%"
	});

	$(".s_courses").waypoint(function() {
		$(".s_courses .course").removeClass("course_off").removeClass("op_anim");
	}, {
		offset : "50%"
	});

	$(".s_get").waypoint(function() {
		$(".get_item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("op_anim");
			}, 400*index);
		});
	}, {
		offset : "40%"
	});	
	
	$('.feed_span').click(function() {
		$('.feed_ul').slideToggle("fast");
	});
	$('.feed_ul li').click(function() {
		var tx = $(this).html();
		var tv = $(this).attr('alt');
		$(".feed_ul").slideUp('fast');
		$(".feed_span").html(tx);
		$(".feed_selected").html(tv);
	});

	$('.feed_span_c').click(function() {
		$('.feed_ul_c').slideToggle("fast");
	});
	$('.feed_ul_c li').click(function() {
		var tx = $(this).html();
		var tv = $(this).attr('alt');
		$(".feed_ul_c").slideUp('fast');
		$(".feed_span_c").html(tx);
		$(".feed_selected_c").html(tv);
	});

	$(".toggle_mnu").click(function(){
		if(	$(".top_mnu").is(':visible')){ 
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li").removeClass("fadeInUp animated");
			$(".sandwich").removeClass("active");
			$(".top_text").animate({opacity:1}); } 
			else  {
				$(".top_mnu").fadeIn(600);
				$(".top_mnu li").addClass("fadeInUp animated");
				$(".sandwich").addClass("active");
				$(".top_text").animate({opacity:0.5});
			}});

	$(".top_mnu a").click(function(){
		$(".top_mnu").fadeOut(600);
		$(".sandwich").removeClass("active");	
	});

	$(".top_mnu ul a").mPageScroll2id();
	$(".move_down").mPageScroll2id();

	//E-mail Ajax Send
	$("#header_feed").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		alert('Спасибо за заявку!\nНаш менеджер свяжется с Вами в ближайшее время!');		
		$.magnificPopup.close();
		setTimeout(function() {
			// Done Functions
			th.trigger("reset");
		}, 1000);
	});
	return false;
	});

	//E-mail Ajax Send
	$("#help_feed").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		alert('Спасибо за заявку!\nНаш менеджер свяжется с Вами в ближайшее время!');
		setTimeout(function() {
			// Done Functions
			th.trigger("reset");
		}, 1000);
	});
	return false;
	});

	//E-mail Ajax Send
	$("#btm_feed").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		alert('Спасибо за заявку!\nНаш менеджер свяжется с Вами в ближайшее время!');
		setTimeout(function() {
			// Done Functions
			th.trigger("reset");
		}, 1000);
	});
	return false;
	});

	$(".btn_news").magnificPopup({type:"inline", midClick: true});

	$(".news_item_wrap").each(function(i){
		$(this).find("a").attr("href", "#news_" +i);
		$(this).find(".news_descr").attr("id", "news_" +i);
	});

});
