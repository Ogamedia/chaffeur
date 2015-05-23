 AutoForm.hooks({

 	selectForm: {
 		onSuccess: function(formType, result) {
 			console.log(result);
 			$('#confirmation').modal(show);
 		},

 		  // Called when any submit operation fails
 		  onError: function(formType, error) {
 		  	console.log(error);
 		  }
 		}
 	});
