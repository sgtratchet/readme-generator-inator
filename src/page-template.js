module.exports = templateData => {
  console.log(templateData);
 
    return `
    # ${templateData.projects[0].projectName}

    ## ${templateData.projects[0].description}

    ## Table Of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    ## Installation
    ${templateData.projects[0].installation}
    ## Usage
    ${templateData.projects[0].usage}
    ## License
    This application is covered under the ${templateData.projects[0].license} license
    ## Contributing
    ${templateData.projects[0].name},${templateData.projects[0].contributing}
    ## Tests
    ${templateData.projects[0].tests}
    ## Questions
    For any questions about this application please contact me via email at: ${templateData.projects[0].email} 
    and visit my [github](https://github.com/${templateData.projects[0].github})

    `;
  };

// module.exports = generatePage;