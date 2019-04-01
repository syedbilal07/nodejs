var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
   service:'hotmail',
   auth: {
       user: '******@hotmail.com',
       pass: '*******'
   }
});

var mailOptions = {
    from: '******@hotmail.com',
    to: '******@gmail.com',
    subject: 'Sending Email From NodeJS',
    text: 'Boom! :)'
};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
       console.log(error);
   }
   else{
       console.log('Email Sent : ' + info.response);
   }
});