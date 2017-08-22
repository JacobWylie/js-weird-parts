// Use our object on the click of the login button
$('#login').click(function() {

	// Create a new 'Greetr' object (let's pretend we know the name from the login)
	const loginGreeter = G$('John', 'Doe');

	// Hide the login 
	$('#logindiv').hide();

	// Fire off a HTML greeting, passing the '#greeting' as the selector and the 
	// chosen language, and log the welcome as well
	loginGreeter.setLang($('#lang').val()).HTMLGreeting($('#greeting'), true).log();
})




