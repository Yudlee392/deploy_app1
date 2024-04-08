const nodemailer = require('nodemailer');
const dotenv = require("dotenv");

dotenv.config();
const GMAIL_USERNAME = process.env.GMAIL_USERNAME;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

async function sendMailToCoordinator(req, email, facultyName, submissionId) {
    const protocol = req.protocol;
    const host = req.get('host');
    const baseUrl = `${protocol}://${host}`
    const mailOptions = {
        from: GMAIL_USERNAME, // Replace with your email address
        to: email,
        subject: 'New Submitted Article Of Student',
        html: `<p>Hello Coordinator of ${facultyName},</p>
               <p>Please click the following link to review new submission:</p>
               <p>${baseUrl}/coordinator/submission/${submissionId}/edit</p>`
    };


    // Send the verification email 
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Replace with your SMTP server hostname or IP address
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: GMAIL_USERNAME, // Replace with your email address
            pass: GMAIL_PASSWORD, // Replace with your email password
        },
    });

    try {
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send verification email');
    }

}

async function sendMailToStudent(req, email, status, comment, title, fullName) {
    const protocol = req.protocol;
    const host = req.get('host');
    const baseUrl = `${protocol}://${host}`
    const mailOptions = {
        from: GMAIL_USERNAME, // Replace with your email address
        to: email,
        subject: `Result of your submission`,
        html: `<p>Hello ${fullName}, your submission with title "${title}" has been ${status}</p>
               <p>New comment from coordinator: ${comment}</p>
               <p>For more detail: ${baseUrl}/student/submission/view</p>`
    };

    // Send the verification email 
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Replace with your SMTP server hostname or IP address
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: GMAIL_USERNAME, // Replace with your email address
            pass: GMAIL_PASSWORD, // Replace with your email password
        },
    });

    try {
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send verification email');
    }

}

module.exports = { sendMailToCoordinator, sendMailToStudent }
