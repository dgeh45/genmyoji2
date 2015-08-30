(function($) {
	$('#header').fadeIn();
	$('#header-middle li').hover(function(){
		$(this).children('a').children('span').show();
	},function(){
		$(this).children('a').children('span').hide();
	});

	$(window).on('load scroll', function(){
		if($(this).scrollTop() > 20){
        	$('#header-middle').show();
        	$('#header').fadeOut();
        	$('.option-widget').show();
        } else {
        	$('#header-middle').hide();
        	$('.option-widget').hide();
        	$('#header').fadeIn();
		}
		var wTop = $(window).scrollTop();
		var overAllHeight = $('#top').height();
		var annaiHeight = $('#annai').height();
		var topHeight = $('#top-widget').height();
		var soushikiHeight = $('#soushiki').height();
		var houjiHeight = $('#houji').height();
		var questionHeight = $('#question').height();
		var accessHeight = $('#access').height();
		var chawakaiHeight = $('#chawakai').height();
	if((wTop >= topHeight) && ((topHeight + annaiHeight) >= wTop)){
			$('#header-middle li a').removeClass('select');
			$('#header-middle li.annai a').addClass('select');
		} else if(((topHeight + annaiHeight + soushikiHeight) >= wTop) && (wTop >= (topHeight + annaiHeight)) ){
			$('#header-middle li a').removeClass('select');
			$('#header-middle li.soushiki a').addClass('select');
		} else if(((topHeight + annaiHeight + soushikiHeight + houjiHeight) >= wTop) && (wTop >= (topHeight + annaiHeight + soushikiHeight)) ){
			$('#header-middle li a').removeClass('select');
			$('#header-middle li.houji a').addClass('select');
		} else if(topHeight >= wTop){
			$('#header-middle li a').removeClass('select');
		} else if(((topHeight + annaiHeight + soushikiHeight + houjiHeight + questionHeight) >= wTop) && (wTop >= (topHeight + annaiHeight + soushikiHeight + houjiHeight)) ){
			$('#header-middle li a').removeClass('select');
			$('#header-middle li.question a').addClass('select');
		} else if(((topHeight + annaiHeight + soushikiHeight + houjiHeight + questionHeight + accessHeight) >= wTop) && (wTop >= (topHeight + annaiHeight + soushikiHeight + houjiHeight + questionHeight)) ){
			$('#header-middle li a').removeClass('select');
			$('#header-middle li.access a').addClass('select');
		} else if(((topHeight + annaiHeight + soushikiHeight + houjiHeight + questionHeight + accessHeight + chawakaiHeight) >= wTop) && (wTop >= (topHeight + annaiHeight + soushikiHeight + houjiHeight + questionHeight + accessHeight)) ){
			$('#header-middle li a').removeClass('select');
			$('#header-middle li.chawakai a').addClass('select');
		}
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
