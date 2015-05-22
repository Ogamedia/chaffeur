Template.emailer.events({
	'click #mailed': function (event) {
		event.preventDefault();
		var userMail = $('#emailInput').val();
		Mailers.insert({mail: userMail});
		$('#emailInput').val(' ');
	}
});