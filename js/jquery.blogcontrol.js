(function($) {
	$('#header').fadeIn();
	$('#header-middle li').hover(function(){
		$(this).children('a').children('span').show();

	},function(){
		$(this).children('a').children('span').hide();
	});

	// ページ内スクロール
	$("a[href^='#']").click(function(){
		if($(this).attr('href') != '#'){
			var youWillBeJumpTo = $(this).attr('href');
			var targetOffset = $(youWillBeJumpTo).offset().top;
			var nowOffset = $(window).scrollTop();
			var speed = Math.floor(Math.max(nowOffset,targetOffset) - Math.min(nowOffset,targetOffset)) |3;
			$(navigator.appName.match(/Opera/) ? "html" : "html,body").animate({scrollTop:targetOffset}, 'slow','swing');
		}
		return false;
	});

}(jQuery));
