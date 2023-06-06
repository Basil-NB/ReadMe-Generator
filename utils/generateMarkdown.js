function renderLicenseBadge(license) {
  if (license) {
    // Replace 'licenseBadgeURL' with the actual URL of the license badge image
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license) {
    // Replace 'licenseURL' with the actual URL of the license text or documentation
    return `(https://opensource.org/licenses/MIT)]`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license) {
    // Replace 'licenseSectionContent' with the actual content of the license section
    return `## License

    `;
  }
  return '';
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

${renderLicenseLink(data.license)}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;