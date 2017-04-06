$(document).ready(function() {

	// class = 'color' + Math.cell(Math.random() * 3);

	$("#newNote").click(function() {
		console.log('clicked');

		// if (!class){
		// 	class = "color" + Math.cell(Math.random() *3);
		// }

		

		$("#notes").append("<li>" + 
	  	"<textarea class='note-title' placeholder='Enter title' maxlength='15'/>" + 
	  	"<textarea class='note-content' placeholder='Enter note here'/>" + 
	  	"<img class='close' src='http://www.iconninja.com/files/583/379/810/close-circular-button-of-interface-icon.png'/>" + 
	  	"</li>");

	  	$(".close").click(function() {
		console.log('clicked close button');
		$(this).closest('li').css('display', 'none');
		});
	});

});




	