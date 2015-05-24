 AutoForm.hooks({

 	selectForm: {
 		onSuccess: function(formType, result) {
 			var modal = $('#modalItem').modal('show');
 			var item = Details.findOne({_id: result});
 			console.log(item)
 			// email variables
 			var pickLocation= item.pickLocation;
 			var dropLocation = item.dropLocation;
 			var pickDate = item.pickDate;
 			var dropDate = item.dropDate;
 			var pickTime = item.pickTime;
 			var dropTime = item.dropTime;
 			var range = item.range;
 			var carType = item.carType;
 			var phone = item.phone;
 			var emailAddress = item.Email;


 			// email variables

 			var dataContext={
 				pick_location: pickLocation,
 				drop_location: dropLocation,
 				pick_date: pickDate,
 				drop_date: dropDate,
 				pick_time: pickTime,
 				drop_time: dropTime,
 				car_range:range,
 				car_type: carType,
 				phone_number: phone,
 				email_address: emailAddress

 			}

 			var html=Blaze.toHTMLWithData(Template.mailContent, dataContext);

 			var options = {
 				from: "kwame.yeboah@meltwater.org",
 				to: emailAddress,
 				subject: "Dear Customer ",
 				html: html
 			}

 			Meteor.call('sendEmail', options);
 		},

 		  // Called when any submit operation fails
 		  onError: function(formType, error) {
 		  	console.log(error);
 		  }
 		}
 	});