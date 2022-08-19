(function () {

	$(".flex-slide").each(function () {
		$(this).hover(function () {
			$(this).find('.flex-title').css({
				'writing-mode': 'horizontal-tb',
				top: '10%'
			});
			$(this).find('.flex-about').css({
				opacity: '1'
			});
		}, function () {
			$(this).find('.flex-title').css({
				'writing-mode': 'vertical-lr',
				top: '15%'
			});
			$(this).find('.flex-about').css({
				opacity: '0'
			});
		})
	});
})();

