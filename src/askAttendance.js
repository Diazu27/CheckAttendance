const inquirer = require('inquirer');

const askAttendance = async()=>{
    const Answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'AttendanceType',
        message: 'Selecciona el tipo de marca que necesitas',
        choices: [{value: '1', name: 'Marcar entrada'},{value: '2',name: 'Marcar salida'},{value: '3',name: 'Marcar hora de almuerzo'},{value: '4',name: 'Marcar regreso de almuerzo'}],
      },
    ])

    return parseInt(Answer.AttendanceType);
}

module.exports = askAttendance;