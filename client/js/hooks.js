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


 			// price calculation
 			var price = 0;
 				// based on location"Mini-Bus", "Sedan", "SUV"
 				if (pickLocation == "Accra International Airport (Kotoka)" || "Accra") {
 					if (carType == "Sedan", "SUV") {
 						price = 80;
 					} else if(carType == "SUV"){
 						price = 140;
 					}
 					else if(carType == "Mini-Bus"){
 						price = 150;
 					} else {
 						price = 100;
 					}
 				} else if (pickLocation == "Accra International Airport (Kotoka)" || "Accra") {

 				} else {

 					// based on car type
 				}


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
 			var Chauffeur = "carhiregh@gmail.com"

 			var options = {
 				from: Chauffeur,
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