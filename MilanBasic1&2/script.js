$(document).ready(function() {

   $("img").click(showTarget);
     function showTarget () {

     var img = $(this).attr("alt");

     if(img=="Santa Claus"){

     	$(this).parent().slideUp();
     	$ ("#newMsg1").text("You click on the "+img);
     	$ ("#newMsg").text("Click again if you want");
    } 

    else if(img=="Bell"){

     	
     $(this).parent().slideUp();	
     $ ("#newMsg1").text("You click on the "+img);
     $ ("#newMsg").text("Click again if you want");
	}
 	
 	else{

 	$(this).parent().slideUp();
     $ ("#newMsg1").text("You click on the "+img);
     $ ("#newMsg").text("Click again if you want");
	 }

 }});

	$("button").click(function(){
  	location.reload();
	});
  

