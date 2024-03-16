// const { error } = require('console');
const fs = require('fs');
const chalk = require('chalk')
const validator = require('validator')

// const  readline  = require('readline');

// Readline
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout, 
// });

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// const question = (pertanyaan) => {
//     return new Promise((resovle, rejects) => {
//         rl.question(pertanyaan, (name) => {
//             resovle(name)
//         })
//     })
// }


const saveContact = (name, email, telp) => {
    const contact = { name, email, telp};
    const fileBuffer = fs.readFileSync('data/contact.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    //cek data duplicate//
    const duplicate = contacts.find((contact) => contact.name === name);
        if (duplicate) {
            console.log(chalk.red.inverse.bold('Name Contact Has Entered'));
            return false;
    }
    
    //cek email//
    if (email) {
        if (!validator.isEmail(email)) {
            console.log(chalk.red.inverse.bold('Email Not Valid'))
        }
    }

    //cek nomor//
    if (!validator.isMobilePhone(telp, 'id-ID')) {
        console.log(chalk.red.inverse.bold('Number Phone Is Not Valid'))
        return false
    }


    contacts.push(contact);

    fs.writeFileSync('data/contact.json', JSON.stringify(contacts,null,2));
    
    console.log('Thanks')
    // rl.close();
};

module.exports = {saveContact}
// module.exports = { question }
// module.exports = { question, saveContact  }

















// const { buffer } = require('stream/consumers');
// console.log(fs)

// try {
    //     fs.writeFileSync('data/test.txt', 'Hello wordl');
// } catch(e) {
//     console.log(e)
// }

// fs.writeFile('data/test.txt', 'halloworld fajari', (e) => {
//     console.log(e);
// });

// readfile
// fs.readFile('data/test.txt', 'utf-8', (error, data) => {
//     if (error) throw error;
//     console.log(data)
//     // console.log(error)
// })


// const question2 = () => {
//     return new Promise((resovle, rejects) => {
//         rl.question('Input Your Email: ', (email) => {
//             resovle(email)
//         })
//     })
// }

// const question3 = () => {
//     return new Promise((resovle, rejects) => {
//         rl.question('Have You Eaten Yet? ', (answer) => {
//             resovle(answer)
//         })
//     })
// }

// rl.question('Input Your Name : ', (nama) => {
//     rl.question('Input Your Number Phone: ', (telp) => {
//         rl.question('Have You Eaten Yet? ', (answer) => {
//             const contact = { nama, telp, answer };
//             const file = fs.readFileSync('data/contact.json', 'utf-8');
//             const contacts = JSON.parse(file);

//             contacts.push(contact);

//             fs.writeFileSync('data/contact.json', JSON.stringify(contacts,null,2));
            
//             console.log('Thanks')
//             rl.close();
//         });
//     });
// });

// const data = require('fs');
//             const element = data[deleteKey];
//             delete element;
//             fs.writeFileSync(pathToFile, JSON.stringify(data, null, 4), 'utf8');
//             res.end(deleteKey + ' was deleted');
//             console.log(JSON.stringify(data, null, 4));

// rl.question('Input Your Answer', (y) => {
    //     console.log(`Have You Eaten Yet? ${y}`)
    //     rl.close();
    // });
    
    // rl.question('Input Your Telp :', (telp) => {
        //     console.log(`ThankYou ${telp}`)
//     rl.close();
// });

// rl.question('Input Your Name : ', (nama) => {
//     rl.question('Input Your Number Phone: ', (telp) => {
//         rl.question('Have You Eaten Yet? ', (y) => {
//             console.log(`ThankYou ${nama} for entered your number phone and is your number ${telp} and then you have been eaten before? ${y}` );
//             rl.close();
//         });
//     });
// });