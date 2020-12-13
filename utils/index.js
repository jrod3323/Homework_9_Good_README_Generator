const fs = require("fs");
const inquirer = require("inquirer");

//Create function to make template

var createReadMe = (projectName, description ,installationInstructions, usage, contributionGuidelines, testingGuidelines , licenseName, licenseURL, licenseBadge ,gitHubUserName, email ) => {  
  return `# ${projectName}

[![License](${licenseBadge})](${licenseURL})

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

This application is covered under the following license: ${licenseName}.  For full description of the license please [Click Here](${licenseURL})

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
    choices: [
      "MIT License - short and simple permissive license with conditions only requiring preservation of copyright and license notices",
      "General Public License - Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license",
      "Apache License v 2.0 - permissive license whose main conditions require preservation of copyright and license notices",
      "ISC-License - permissive license lets people do anything with your code with proper attribution and without warranty "
    ],
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


//License Array

const licenseTypes = [
  {
  name: "MIT License",
  url: "https://choosealicense.com/licenses/mit/",
  badge: "https://img.shields.io/badge/license-MIT-green",
  },
  {
    name:"General Public License",
    url: "https://choosealicense.com/licenses/gpl-3.0/",
    badge: "https://img.shields.io/badge/license-GPL%20v%203.0-green",
  },
  {
    name: "Apache License 2.0",
    url: "https://choosealicense.com/licenses/apache-2.0/",
    badge: "https://img.shields.io/badge/license-Apache%202.0-green",
  },
  {
    name: "ISC-License",
    url: "https://choosealicense.com/licenses/isc/",
    badge: "https://img.shields.io/badge/license-ISC-green",
  }
]

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
// If statement to populate based on license choice
    if(license === "MIT License - short and simple permissive license with conditions only requiring preservation of copyright and license notices"){
      licenseName = licenseTypes[0].name ;
      licenseURL = licenseTypes[0].url ;
      licenseBadge = licenseTypes[0].badge;
    } else if (license === "General Public License - Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license"){
      licenseName = licenseTypes[1].name ;
      licenseURL = licenseTypes[1].url ;
      licenseBadge = licenseTypes[1].badge;
    } else if(license === "Apache License v 2.0 - permissive license whose main conditions require preservation of copyright and license notices"){
      licenseName = licenseTypes[2].name ;
      licenseURL = licenseTypes[2].url ;
      licenseBadge = licenseTypes[2].badge;
    } else if(license === "ISC-License - permissive license lets people do anything with your code with proper attribution and without warranty "){
      licenseName = licenseTypes[3].name ;
      licenseURL = licenseTypes[3].url ;
      licenseBadge = licenseTypes[3].badge;
    };

    const templateReadMe = createReadMe(projectName, description ,installationInstructions, usage, contributionGuidelines, testingGuidelines , licenseName, licenseURL, licenseBadge ,gitHubUserName, email );

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