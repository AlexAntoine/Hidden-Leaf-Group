require('dotenv').config({path:'./config/.env'})
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.HLG_KEY);

const sendEmail = async(email, subject, message)=>{

    const result = await sgMail.send({
        to: 'hiddenleafgroup@gmail.com', // Change to your recipient
        from: 'hlg@hiddenleafgroup.com', // Change to your verified sender
        subject: `Subject:${email}- ${subject}`,
        text: message,
    });

    console.log(result);

}

module.exports = sendEmail;



