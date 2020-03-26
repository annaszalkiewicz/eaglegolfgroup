const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const creds = require("./config/config");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
 });

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.send('Server is working. Please post at "/send" to submit a message.');
});



app.listen(process.env.PORT || 8080);

let transport = {
  host: "mail.eaglegolfgroup.co.uk",
  port: "465",
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

let transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/send", (req, res, next) => {
  let name = req.body.name;
  let surname = req.body.surname;
  let email = req.body.email;
  let telephone = req.body.telephone;
  let message = req.body.message;
  let content = `
  First name: ${name} \n
  Last name: ${surname} \n
  Email: ${email} \n
  Telephone: ${telephone} \n
  Message: ${message}`;

  var mail = {
    from: `${email}`,
    to: "info@eaglegolfgroup.co.uk", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: `${content}`
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

module.exports = app;
