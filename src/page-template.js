const generatePage = (projectsArr) => {
    return `
    # ${projectName}

    ## ${Description}

    ## Table Of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](*license)
    * [Contributing](*contributing)
    * [Tests](*tests)
    * [Questions](*questions)

    ## Installation
    ${installation}
    ## Usage
    ${usage}
    ## License
    This application is covered under the ${license.join(', ')} license
    ## Contributing
    ${name},${contributing}
    ## Tests
    ${tests}
    ## Questions
    For any questions about this application please contact me via email at: ${email} 
    and visit my [github](https://github.com/${github})

    `;
  };

module.exports = generatePage;