const root 		= require('app-root-path');
const nodemailer = require('nodemailer');
const logger = require(root + '/libs/logger/logger');


const transporter = nodemailer.createTransport({
    host: process.env.MAILERHOST,
    port: process.env.MAILERPORT,
    secure: true,
	auth: {
		user: process.env.MAILERUSERNAME,
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
			from: process.env.MAILERUSERNAME,
			to: 'clintonunitedchurchofchrist@gmail.com',
			subject: `${req.body.name} sent a message from your website!`, // make important
			html: `<strong>Senders name:</strong> ${req.body.name}<br>
						<strong>Senders email address:</strong> ${req.body.email}<br>
						<p>${req.body.message}</p>` // from request
		};
		
		transporter.sendMail(message, function(error, info){
			if (error) {
				logger.error("(public) Contact.send: " + error);
			} else {
                logger.info('Email sent: ' + info.response);
			}
		});
		res.redirect('/contact');
	}
}
