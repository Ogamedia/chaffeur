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

 			var price = 0;
 			var numberOfDays = 0;
 			var costofJourney = 0;


 			numberOfDays = 1 + (moment(dropDate).dayOfYear() - moment(pickDate).dayOfYear());
 			console.log(numberOfDays);

 			// price calculation

 			// based on location
 				// location within accra
 				if (pickLocation == "Accra International Airport (Kotoka)" || "Accra") {
 					// based on range of car type
 					if (range == "luxury") {
 						// luxury pricing
 						if (carType == "Sedan") {
 							price = 120;
 						} else if(carType == "SUV"){
 							price = 150;
 						}
 						else if(carType == "Mini-Bus"){
 							price = 200;
 						} else {
 							price = 120;
 						}
 					} else {
 						// economy and midrange pricing
 						if (carType == "Sedan") {
 							price = 80;
 						} else if(carType == "SUV"){
 							price = 140;
 						}
 						else if(carType == "Mini-Bus"){
 							price = 150;
 						} else {
 							price = 100;
 						}
 					};
 					// based on range of car type
 				} else if (pickLocation == "Outside Accra") {
 						// luxury pricing
 						if (range == "luxury") {
 							if (carType == "Sedan") {
 								price = 150;
 							} else if(carType == "SUV"){
 								price = 200;
 							}
 							else if(carType == "Mini-Bus"){
 								price = 200;
 							} else {
 								price = 150;
 							}
 						// economy and midrange pricing
 					} else{
 						if (carType == "Sedan") {
 							price = 120;
 						} else if(carType == "SUV"){
 							price = 160;
 						}
 						else if(carType == "Mini-Bus"){
 							price = 170;
 						} else {
 							price = 120;
 						}
 					}
 				} else if (pickLocation == "Other") {
 					// other location prices are standardised price
 					if (carType == "Sedan") {
 						price = 150;
 					} else if(carType == "SUV"){
 						price = 180;
 					}
 					else if(carType == "Mini-Bus"){
 						price = 200;
 					} else {
 						price = 120;
 					}
 				}

 			// 
 			// cost

 			
 			// calculate discount
 			if (numberOfDays > 3) {
 				costofJourney = (price * numberOfDays) * 0.9
 			} else {
 				costofJourney = price * numberOfDays;
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
 				email_address: emailAddress,
 				pricing: price,
 				duration: numberOfDays,
 				cost: costofJourney
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