// // import chalk from 'chalk';
// // const log = console.log;
const validator = require('validator');
const chalk = require("chalk");
const logUpdate = require('log-update')
// const { readline } = require('readline/promises');

// const rl = readline({
//     input: process.stdin,
//     output: process.stdout,
    
// });

console.log(validator.isEmail('fajari@gmail.com'));
console.log(validator.isMobilePhone('08844234324', 'id-ID'));
console.log(validator.isNumeric('08844234324'));

// console.log(chalk.blue('hello world'));

console.log(chalk.blue("llalala"))
console.log(chalk.red("llalala"))
console.log(chalk.green("llalala"))
console.log(chalk.italic.bgRed.black("llalala"))
console.log(chalk.red("Hallo Fajari Im Your Self and Your Self is my Self Too") + chalk.underline(" " + 'Enjoy Your Time And Slowly') + chalk.blue(chalk.bgCyan(' ' + 'Happy Hunting')));

const name = "fajari";
const pesan = chalk`lorem, lalalalal {bgRed hallo}. nama saya : ${name}`;
console.log(pesan)
console.log('jalo')


const result = [chalk.red.underline('fajari'), chalk.blue('reski'), chalk.green('uwan'), chalk.white('hadi'), chalk.cyan("aziz"), chalk.black('albab')];

let  setTime = 0;

setInterval(() => {
    setTime == 0 ? (setTime = 1) : (setTime = 0);
    logUpdate(result[setTime]);
    return false
}, 1000);

// console.log(chalk.red("Hallo Fajari Im Your Self and Your Self is my Self Too") + chalk.underline(" " + 'Enjoy Your Time And Slowly') + chalk.blue(chalk.bgCyan(' ' + 'Happy Hunting')));


