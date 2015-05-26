// In your server code: define a method that the client can call
Meteor.methods({
  sendEmail: function (options) {
    // check(options, [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send(options);
  }
});


Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://carhiregh@gmail.com:mestcapstone@smtp.gmail.com:465';
});
