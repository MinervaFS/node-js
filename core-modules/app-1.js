const fs = require('fs')
const { buffer } = require('stream/consumers');
console.log(fs)

try {
        fs.writeFileSync('data/test.txt', 'Hello wordl');
} catch(e) {
    console.log(e)
}

fs.writeFile('data/test.txt', 'halloworld fajari', (e) => {
    console.log(e);
});

readfile
fs.readFile('data/test.txt', 'utf-8', (error, data) => {
    if (error) throw error;
    console.log(data)
    // console.log(error)
})


const question2 = () => {
    return new Promise((resovle, rejects) => {
        rl.question('Input Your Email: ', (email) => {
            resovle(email)
        })
    })
}

const question3 = () => {
    return new Promise((resovle, rejects) => {
        rl.question('Have You Eaten Yet? ', (answer) => {
            resovle(answer)
        })
    })
}

rl.question('Input Your Name : ', (nama) => {
    rl.question('Input Your Number Phone: ', (telp) => {
        rl.question('Have You Eaten Yet? ', (answer) => {
            const contact = { nama, telp, answer };
            const fileBuffer = fs.readFileSync('data/contact.json', 'utf-8');
            const contacts = JSON.parse(fileBuffer);

            contacts.push(contact);

            fs.writeFileSync('data/contact.json', JSON.stringify(contacts,null,2));
            
            console.log('Thanks')
            rl.close();
        });
    });
});

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