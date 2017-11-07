$(function() {

	$(".cbk").magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".mobile-mnu").slideToggle();
		return false;
	});

	$("a[href=#callback]").magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	$('.contact').click(function() {
		$("html, body").animate({
			scrollTop : $(".request").offset().top
		}, 600);
	});

	$('#collection').click(function() {
		$("html, body").animate({
			scrollTop : $("#dresses").offset().top
		}, 600);
	});

	$("a[href*='#main'], a[href*='#reviews'], a[href*='#contacts']").mPageScroll2id()

	$(".item-review p").equalHeights();

	$(".dress-link").each(function(e) {
		var th = $(this);

		th.attr("href", "#dress-front-" + e)
			.find(".dress-popup")
				.attr("id", "dress-front-" + e);
				$(".contact").click(function(event) {
					$(".mfp-ready").addClass("hidden");
					return false;
				});
	});

	$("a[href=#callback]").click(function(event) {
		$(".mfp-ready").removeClass("hidden");
	});

	$(".dress-link").magnificPopup({
		fixedContentPos: true,
	});




	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#fb").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				$(".success").removeClass("visible");
				$.magnificPopup.close();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
