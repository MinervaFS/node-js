const contact = require('./contact-save');

const main = async () => {
    const name = await contact.question('Input Your Name: ');
    const email = await contact.question('Input Your Email: ');
    const answer = await contact.question('Have You Eaten Yet? ');
    const yourCondition = await contact.question('How are you? Is the fast going well? ');

   contact.saveContact(name, email, answer, yourCondition)
};

main();