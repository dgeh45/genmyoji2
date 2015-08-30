jQuery.noConflict();
(function($) {
	var r = {
		kdwrCptn: {
			disable: false,
			sel: {
				wrapper: $('#gotouchi-widget .localfood-imagewrap'),
				target: $('.localfood-imagewrap li'),
				action: '.gotouchiN-meta-hide'
			}
		},
		tabAction: {
			targetTab: $('#tab-list li'),
			jokenTab: $('#joken li'),
			targetContentsList: $('#area-spot .normal-list'),
			rankBest: $('#tab-ranking .rank-wrap')
		},
		timeline: {
			listBox: $('.timeline-list'),
			list: $('.timeline-list li')
		}
	}
	//timeline
	timeModel = 5;
	//timeModel = location.search ? Number(location.search.split('=')[1]) : 5;
	var newModel = r.timeline.list.length -4
	var sto = setTimeout(function(){
		r.timeline.listBox.find('li:gt(' + newModel + ')').slideDown(700, 'swing');
		clearTimeout(sto);
	}, 500);
	var tid;
	r.timeline.listBox.on('mouseenter', function(){
		clearInterval(tid);
	}).on('mouseleave', function(){
		timeline();
	});
	function timeline() {
		tid = setInterval(function() {
			var $lastModel = r.timeline.listBox.find('> :visible:eq(0)').prev();
				$lastModel.slideDown();
			if (0 == r.timeline.list.not(':visible').length) {
				clearInterval(tid);
			};
		}, timeModel * 1000);
	}
	timeline();
	// tab-acction
	r.tabAction.targetTab.click(function(){
		var targetNum = r.tabAction.targetTab.index(this);
		r.tabAction.targetTab.removeClass('select').eq(targetNum).addClass('select');
		r.tabAction.targetContentsList.addClass('disnon').eq(targetNum).removeClass('disnon');
		return false;
	});
	r.tabAction.jokenTab.click(function(){
		var targetNum = r.tabAction.jokenTab.index(this);
		r.tabAction.jokenTab.removeClass('select').eq(targetNum).addClass('select');
		r.tabAction.rankBest.addClass('disnon').eq(targetNum).removeClass('disnon');
		return false;
	});
	// KODAWARI CAPTION
	r.kdwrCptn.sel.wrapper.each(function () {
		if (!r.kdwrCptn.disable) {
			r.kdwrCptn.sel.target.on({
				'mouseenter': function () {
					$(this).find(r.kdwrCptn.sel.action).slideDown('fast');
				},
				'mouseleave': function () {
					$(this).find(r.kdwrCptn.sel.action).slideUp('fast');
				}
			});
		}
	});
	$('#aream-intropart .more-info').click(function(){
		$('#aream-intropart .more-infoText').css('display','block');
		$(this).remove();
	});
	$('#aream-intropart .next').click(function(){
		$(this).hide();
		$('.aream-introtext').hide();
		$('.heading-list').show();
		$('#aream-intropart .prev').css('display','block');
		return false;
	});
	$('#aream-intropart .prev').click(function(){
		$(this).hide();
		$('.aream-introtext').show();
		$('.heading-list').hide();
		$('#aream-intropart .next').css('display','block');
		return false;
	});
	$('#prefPlanSearchFormSubmit input:submit').live('click', function() {
	    var a = parseInt($("#pprl option:selected").val());
	    var b = parseInt($("#pprh option:selected").val());
	    if (a == "") var a = 0;
	    if (b == "") var b = 99999;
	    if (a > b) {
	        $("#pprl").val(b);
	        $("#pprh").val(a)
	    }
	    $("#planMember").removeAttr("name")
	});
})(jQuery);