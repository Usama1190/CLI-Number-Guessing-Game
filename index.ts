#! /usr/bin/env node

import inquirer from 'inquirer';

const mechineRandom = Math.floor(Math.random() * 11);

const userGuessNumber = await inquirer.prompt([
    {
        name: 'guessNumber',
        type: 'number',
        message: 'Please guess number b/w 1 to 10'
    },
]);

if(userGuessNumber.guessNumber === mechineRandom) {
    console.log('You guessed right number');
}
else {
    console.log('You guess wrong number');
}

console.log('Gessed number of mechine is: ' + mechineRandom);
