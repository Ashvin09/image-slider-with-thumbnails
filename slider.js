$(document).ready(function(){

	
	$("#thumbnail ul li img").click(function(){	
   
    var x = $(this).attr("src");  // read src of clicked image
	var y = $("#slide ul li:eq(1) img").attr("src"); 
	 if (x == y)
	 {
		 
	 }
	else if(x >= y)
	  {
	     $("#slide ul li:eq(2) img").attr("src",x);    
		   moveRight();
	   }
    else {
         $("#slide ul li:eq(0) img").attr("src",x);    
		   moveLeft();
         }

 });
 function moveLeft() {
        $('#slide ul').animate({
            left: + 600
        }, 3000, function () {
			//$(this).find("li:last").after($(this).find("li:first")); 
         $('#slide ul li:last').prependTo('#slide ul');
            $('#slide ul').css({left: 0});
        });
    };

 function moveRight() {
        $('#slide ul').animate({
            left: - 600
        }, 3000, function () {
			//$(this).find("li:last").after($(this).find("li:first")); 
           $('#slide ul li:first').appendTo('#slide ul');
            $('#slide ul').css({left: 0});
        });
    };
	
});
 