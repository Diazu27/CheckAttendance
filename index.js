const askAttendance = require("./src/askAttendance");
const sendMail = require("./src/sendEmail");



async function main(){
    console.clear()
    const MarkOption = await askAttendance();
    sendMail(MarkOption)
}

main();


