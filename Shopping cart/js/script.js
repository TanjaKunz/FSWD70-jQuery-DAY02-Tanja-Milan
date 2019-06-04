$(document).ready(function() {
	$(".button").click(addToCart);		

		function addToCart(){			

			var index = $(".button").index(this);
			var item = products[index].Product;
			var price = products[index].Price;

			$("#cart").append("<div class='product'>"+item+"</div>");
			$("#cart").append("<div class='price'>"+price+"</div>");
		}



})