const nodemailer = require("nodemailer");
require("dotenv").config({ path: ".env" });

/*remove comment if aws keys have email permissions
 const aws = require("@aws-sdk/client-ses");
 const { defaultProvider } = require("@aws-sdk/credential-provider-node");

 const ses = new aws.SES({
   apiVersion: "2010-12-01",
   region: "us-east-1",
   defaultProvider,
 });
*/

const sendEmail = async (email, subject, text) => {
  try {
    /* remove comment if aws keys have email permissions
     const transporter = nodemailer.createTransport({
       SES: { ses, aws },
     });
    */

    // coment this transporter variable if aws keys have email permissions
    const senderEmail = process.env.EMAIL_USER;
    const password = process.env.EMAIL_PASSWORD; //have to create an Application Specific password

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: password,
      },
    });

    console.log(email);

    await transporter.sendMail({
      from: senderEmail,
      to: email,
      subject: subject,
      text: text,
    });

    console.log("email sent sucessfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = sendEmail;
