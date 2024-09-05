// TODO: Include packages needed for this application

import { writeFile } from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown';

// TODO: Create an array of questions for user input

const questions = [

    {
        type: 'input',
        name: `title`,
        message: `Enter the title of the README:`,
    },

    {
        type: 'input',
        name: `description`,
        message: `Enter the description of your project`,
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions:',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information:',
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Enter the contributing guidelines:',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Enter the test instructions:',
    },

    {
        type: 'list',
        name: 'license',
        choices:[
            `MIT License`,
            `Apache License 2.0`,
            `Boost Software License 1.0`,
            `None`
        ],
        message: `What license will you use?`,
      },

      {
        type: `input`,
        name: `GitHub username`,
        message: `Enter your GitHub username`
      },

      {
        type: `input`,
        name: `email address`,
        message: `Enter your email address`
      }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('File written successfully');
        }
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile(`README.md` , markdown);
    }); 
}

// Function call to initialize app
init();
