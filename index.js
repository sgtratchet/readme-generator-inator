const inquirer = require('inquirer');
const pageTemplate = requier('./src/page-template.js');
const fs = require('fs');

const promptUser = ()=>{
  // If there's no 'projects' array property, create one
  if (!readmeData.projects) {
    readmeData.projects = [];
  }

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username'
    },
    {
      type: 'input',
      name: 'project-name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'how would someone install this project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide some information about how to use the project'
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What license is this covered under? (Check all that apply)',
      choices: ['Open Source', 'MIT']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who has contributed to this project?'
    },
    ])
    
    .then(projectData => {
      readmeData.projects.push(projectData);
        return readmeData;
    });
  };

  promptUser()
  .then(readmeData => {
    return generatePage(readmeData);
  })
  .then(pageMD => {
    return writeFile(pageMD);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .catch(err => {
    console.log(err);
  });

  const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };