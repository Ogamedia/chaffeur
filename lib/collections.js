Details  = new Mongo.Collection('details');


var Schemas = {};

Schemas.Detail = new SimpleSchema({

  pickLocation: {
  	type: String,
  	label: "Pick-up Location",
    allowedValues: ["Accra International Airport (Kotoka)", "Accra", "Outside Accra", "Other"]
  },

  dropLocation: {
  	type: String,
  	label: "Drop-of Location",
   allowedValues: ["Accra International Airport (Kotoka)", "Accra", "Outside Accra", "Same as Pick-up"]
 },

 pickDate: {
  type: Date,
  label: "pickup date",
  autoform: {
    type: "bootstrap-datepicker"
  }
},

dropDate: {
  type: Date,
  label: "Drop-off date",
  autoform: {
    type: "bootstrap-datepicker"
  }
},

pickTime: {
 type: String,
 label: "Pick-up Time",
 allowedValues: ["1:00 am", "2:00am", "3:00am", "4:00am", "5:00am", "6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "Noon", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm"],
 autoform: {
  afFieldInput: {
   firstOption: "select Pick-up time"
 }
}
},

dropTime: {
 type: String,
 label: "Drop-off Time",
 allowedValues: ["1:00 am", "2:00am", "3:00am", "4:00am", "5:00am", "6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "Noon", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm", "10:00 pm", "11:00 pm" ],
 autoform: {
  afFieldInput: {
   firstOption: "select Drop-off time"
 }
}
},

range: {
  type: String,
  allowedValues: ["economy", "mid-range", "luxury"]
},

carType: {
  type: String,
  allowedValues: ["Mini-Bus", "Sedan", "SUV"]
},

phone: {
  type: String,
  label: "Phone Line"
},

Email: {
 type: String,
 regEx: SimpleSchema.RegEx.Email,
 label: "Email"
},




  // location: {
  // 	type: Object,
  // 	autoform: {
  // 		type: 'map',
  // 		afFieldInput: {
  // 			defaultLat: ,
  // 			defaultLng: ,
  // 		}
  // 	}
  // }

});
Details.attachSchema(Schemas.Detail); 