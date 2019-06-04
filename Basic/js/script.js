$(document).ready(function() {

	$("img").click(showTarget);

		function showTarget() {			
			var img = $(this).attr("alt");

			if (img == "santa claus") {
				
				$(this).parent().slideUp();	
				$("#output").text("Oh no, you chased away " + img +  "!");

			} else {

			$("#output").text("You clicked on the " + img);
			// document.getElementById('output').innerHTML = ;
			}
		}

});

 