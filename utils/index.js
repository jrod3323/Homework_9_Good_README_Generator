const fs = require("fs");
const inquirer = require("inquirer");

//Create function to make template

var createReadMe = (projectName, description ,installationInstructions, usage, contributionGuidelines, testingGuidelines , license ,gitHubUserName, email ) => {  
  return `# ${projectName}

## Table of Contents 

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [License](#license)

## Description 

${description}


## Installation

${installationInstructions}


## Usage 

${usage}


## Contribute

${contributionGuidelines}


## Test

${testingGuidelines}


## Questions

Please reach out to me if you have any questions.

GitHub User Profile - https://github.com/${gitHubUserName}

My Email Address - ${email}


## License

${license}

`
};


//Variable containing questions to be asked

var questions = [
  {
    type: 'input',
    name: 'projectName',
    message: "What's the name of your project",
  },
  {
    type: 'input',
    name: 'description',
    message: "Please describe your project.",
  },
  {
    type: 'input',
    name: 'installationInstructions',
    message: "Please provide instructions for a user to install your project.",
  },
  {
    type: 'input',
    name: 'usage',
    message: "Please provide Usage information for your project",
  },
  {
    type: 'input',
    name: 'contributionGuidelines',
    message: "Please provide contribution quidelines for your project",
  },
  {
    type: 'input',
    name: 'testingGuidelines',
    message: "Please provide testing instructions for your project",
  },
  {
    type: 'list',
    name: 'license',
    message: "Please select what type of license best suits your project",
    choices: ["1","2","3","4"]
  },
  {
    type: 'input',
    name: 'gitHubUserName',
    message: "What's your GitHub Username?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What's your email address?",
  }
];

//test function to attempt md write

// fs.writeFile('README.md', template, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });

//Inquirer module to be invoked to run inquirer prompts

inquirer
  .prompt(questions)
  .then(answers => {
    
    const {projectName, description ,installationInstructions, usage, contributionGuidelines, testingGuidelines , license ,gitHubUserName, email} = answers;
    const templateReadMe = createReadMe(projectName, description ,installationInstructions, usage, contributionGuidelines, testingGuidelines , license ,gitHubUserName, email);

      fs.writeFile('README.md', templateReadMe, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
    
  }) 
  .catch(error => {
    if(error) {
      // Prompt couldn't be rendered in the current environment
      console.log(error)
    } 
  });