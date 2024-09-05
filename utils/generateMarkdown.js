// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
        return `![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case 'Apache 2.0':
        return `![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    case 'GPL 3.0':
        return `![GPL 3.0 License](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    case 'BSD 3-Clause':
        return `![BSD 3-Clause License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)`;
    default:
        return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
        return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
        return 'https://opensource.org/licenses/GPL-3.0';
    case 'BSD 3-Clause':
        return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'MPL 2.0':
        return 'https://opensource.org/licenses/MPL-2.0';
    case 'CC0 1.0':
        return 'https://creativecommons.org/publicdomain/zero/1.0/';
    default:
        return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
}

return `
## License

${licenseBadge ? `![License Badge](${licenseBadge})` : ''}

This project is licensed under the [${license}](${licenseLink}) license.
`;
}

// TODO: Create a function to generate markdown for README
export default function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);

    return `
# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${data.license !== 'None' ? `This project is licensed under the [${data.license}](${licenseLink}) license.
![License Badge](${licenseBadge})` : 'This project is not licensed under any license.'}

## Questions
If you have any questions, please contact me:

- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.email}
    `;
}
