$(document).ready(function(){\
	var $body = $('body');
	fixSignIn();
	//execute only on product detail
	if($body.hasClass('product')){
		
	}
	//execute only on product category
	if($body.hasClass('category')){
		
	}
	//execute only on landing
	if($body.hasClass('landing')){
		
	}
});
function fixSignIn(){
	var signin = $('#signin a:first-child');
	var createaccount = $('#signin a:nth-child(2)').remove();
	if(signin.text() == 'Sign in'){$('#signin').html('<a href="/login.php">Sign In</a>');}
	if(signin.text() == 'Sign out'){$('#signin').html('<a href="/login.php?action=logout">Sign Out</a>');}	
}