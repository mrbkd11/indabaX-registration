$( document ).ready(function() {
	$("#speakers .card1 .profile img, #Speakers-Section-phone .card1 .profile img").each(function() {
		const width = $( window ).width();
		if(width<992){
			$(this).height($(this).width());
		}
	});
});

