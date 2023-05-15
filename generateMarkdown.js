// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else if (license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if (license == 'GNU GPL v3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else if (license == 'Mozilla Public License 2.0'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache 2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if (license == 'MIT') {
    return `(https://opensource.org/licenses/MIT)`
  } else if (license == 'GNU GPL v3') {
    return `(https://www.gnu.org/licenses/gpl-3.0`
  } else if (license == 'Mozilla Public License 2.0'){
    return `(https://opensource.org/licenses/MPL-2.0)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License 
    
    ${renderLicenseBadge(license)}${renderLicenseLink(license)}
    
    `
  } 
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  
  
  ## Description 

  ${data.description}

  ## Table of Contents

  1. [Installation](#Installation)

  2. [Usage](#Usage)

  3. [License](#License)

  4. [Contributing](#Contributing)
  
  5. [Testing](#Tests)

  6. [Questions](#Questions)


  ## Installation

  \`\`\`bash
  ${data.installation}
  \`\`\`

  ## Usage 

  \`\`\`bash
  ${data.usage}
  \`\`\`

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.guidelines}

  ## Tests

  ${data.testing}

  ## Questions

  If you have any questions, find me [here](https://github.com/${data.github})

  You can email me at ${data.email}

  `;
}

module.exports = generateMarkdown;

