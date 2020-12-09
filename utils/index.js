const fs = require("fs");
const inquirer = require("inquirer");

//Create Variable to contain template

var template =  `
# Your Project Title

## Description 

Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.

The quality of a README often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase what your application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.

There's no one right way to structure a good README. There is one very wrong way, however, and that is to not include a README at all or to create a very anemic one. This guide outlines a few best practices. As you progress in your career, you will develop your own ideas about what makes a good README.

At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? If your project has a lot of features, consider adding a heading called "Features" and listing them here.

If you're new to Markdown, read the GitHub guide on [Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

If you need an example of a good README, check out [the VSCode repository](https://github.com/microsoft/vscode).


## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


## Usage 

Provide instructions and examples for use. Include screenshots as needed. 


## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.



## License

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    `


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
    name: 'testInstructions',
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
  .then((answers) => {
    console.log(answers)
  }) 
  .catch(error => {
    if(error) {
      // Prompt couldn't be rendered in the current environment
      console.log(error)
    } 
  });