// // const { buffer } = require('stream/consumers');

// // console.log(fs)

// // try {
//     //     fs.writeFileSync('data/test.txt', 'Hello wordl');
// // } catch(e) {
// //     console.log(e)
// // }
// const { error } = require('console');
// const fs = require('fs');
// const { Readline } = require('readline/promises');

// // fs.writeFile('data/test.txt', 'halloworld fajari', (e) => {
// //     console.log(e);
// // });

// // readfile
// // fs.readFile('data/test.txt', 'utf-8', (error, data) => {
// //     if (error) throw error;
// //     console.log(data)
// //     // console.log(error)
// // })

// // Readline
// const readline = require('readline');
// const { json } = require('body-parser');
// const { rejects } = require('assert');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const dirPath = './data';
// if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath);
// }


// const dataPath = './data/contact.json';
// if (!fs.existsSync(dataPath)) {
//     fs.writeFileSync(dataPath, '[]', 'utf-8');
// }

// const question = (pertanyaan) => {
//     return new Promise((resovle, rejects) => {
//         rl.question(pertanyaan, (name) => {
//             resovle(name)
//         })
//     })
// }

const contact = require('./contact-save');

const main = async () => {
    const name = await contact.question('Input Your Name: ');
    const email = await contact.question('Input Your Email: ');
    const answer = await contact.question('Have You Eaten Yet? ');
    const yourCondition = await contact.question('How are you? Is the fast going well? ');

   contact.saveContact(name, email, answer, yourCondition)
};

main();

/////////////////////////////////
// const { question, saveContact } = require('./contact-save');

// const main = async () => {
//     const name = await question('Input Your Name: ');
//     const email = await question('Input Your Email: ');
//     const answer = await question('Have You Eaten Yet? ');
//     const yourCondition = await question('How are you? Is the fast going well? ');

//    saveContact(name, email, answer, yourCondition)
// };
// main();
////////////////////////////////// yang dipakai untuk contact



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

// const main = async () => {
//     const name = await question('Input Your Name: ');
//     const email = await question('Input Your Email: ');
//     const answer = await question('Have You Eaten Yet? ');
//     const yourCondition = await question('How are you? Is the fast going well? ');

//     const contact = { name, email, answer, yourCondition };
//     const file = fs.readFileSync('data/contact.json', 'utf-8');
//     const contacts = JSON.parse(file);

//     contacts.push(contact);

//     fs.writeFileSync('data/contact.json', JSON.stringify(contacts,null,2));
    
//     console.log('Thanks')
//     rl.close();
// };
// main();


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
// const yargs = require('yargs');

// const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add new contact',
    builder: {

        name: {
            describe: 'Enter Full Names',
            demandOption: true,
            type: 'string',
        },
        
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },

        telp: {
            describe: 'telp',
            demandOption: true,
            type: 'string',
        },     
    },

    handler(argv) {
        const contact = {
            name: argv.name,
            email: argv.email,
            telp: argv.telp,
        }
        console.log(contact);
    }

});

yargs.parse();
