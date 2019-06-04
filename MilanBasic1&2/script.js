$(document).ready(function() {

   $("img").click(showTarget);
     function showTarget () {

     var img = $(this).attr("alt");

     if(img=="Santa Claus"){

     	$(this).parent().slideUp();
     	$ ("#newMsg1").text("Click again on the image or reload page"+img);
     	$ ("#newMsg").text("You shot Santa Claus!");
    } 

    else if(img=="Bell"){

     	
     $(this).parent().slideUp();	
     $ ("#newMsg1").text("Click again on the image or reload page"+img);
     $ ("#newMsg").text("You lost the bell");
	}
 	
 	else{

 	$(this).parent().slideUp();
     $ ("#newMsg1").text("Click again on the image or reload page"+img);
     $ ("#newMsg").text("Opss, there is no gift box for you!");
	 }

 }});

	$("button").click(function(){
  	location.reload();
	});
  

