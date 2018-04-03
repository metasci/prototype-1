const nodemailer = require('nodemailer');

require('dotenv').config();


const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'clintonuccmailsender@gmail.com',
		pass: process.env.MAILERPASSWD
	}
});

module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/public/contact');
	},

	// write function for handling email post
	send: (req, res, next) => {
		
		
		var message = {
			from: 'clintonuccmailsender@gmail.com',
			to: 'clintonunitedchurchofchrist@gmail.com',
			subject: `${req.body.name} sent a message from your website!`, // make important
			html: `<strong>Senders name:</strong> ${req.body.name}<br>
						<strong>Senders email address:</strong> ${req.body.email}<br>
						<p>${req.body.message}</p>` // from request
		};
		
		transporter.sendMail(message, function(error, info){
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});
		res.redirect('/contact');
	}
}
