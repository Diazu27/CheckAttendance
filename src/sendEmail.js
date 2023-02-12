var nodemailer = require('nodemailer');
const UserData = require("../config")

function sendMail(MarkOption){

    let MessageContent = {Title:"", Body:""}
    let actualHour = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    
    switch(MarkOption){
        case 1 : MessageContent = {Title: `Marca entrada - ${UserData.Name} ${UserData.LastName} - ${date}`, Body:`Buen día, marco entrada - ${actualHour}`} ;break;
        case 2 : MessageContent = {Title: `Marca salida - ${UserData.Name} ${UserData.LastName} - ${date} `, Body:`Buen día, marco salida - ${actualHour}`};break;
        case 3 : MessageContent = {Title: `Marca hora de almuerzo - ${UserData.Name} ${UserData.LastName} - ${date}`, Body:`Buen día, marco hora de almuerzo - ${actualHour}`};break;
        case 4 : MessageContent = {Title: `Marca regreso de almuerzo - ${UserData.Name} ${UserData.LastName} - ${date}`, Body:`Buen día, regreso de almuerzo - ${actualHour}`};break;        
    }

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: UserData.Email,
          pass: UserData.Password
        }
    });

    var mailOptions = {
        from: UserData.Email,
        to: UserData.ToEmail,
        subject: MessageContent.Title,
        text: MessageContent.Body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendMail