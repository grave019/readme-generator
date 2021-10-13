const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  function renderLicenseBadge(license) {
    let licenseIcon = "";
    switch (license) {
      case "Apache":
        licenseIcon = "![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
        break;
      case "MIT":
        licenseIcon = "![MIT License](https://img.shields.io/badge/l/atomic-design-ui.svg?)";
        break;
      case "GPLv3 License":
          licenseIcon = "![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)";
        break;
      case "Unlicense":
        licenseIcon = "![Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
        break;
    }
    return licenseIcon;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  function renderLicenseLink(license) {
    var licenseURL = "";
    switch (license) {
      case "Apache":
        licenseURL = `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;
        break;
      case "MIT":
        licenseURL = `[MIT License](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)`;
        break;
      case "GPLv3":
        licenseURL = `[GPLv3 License](https://opensource.org/licenses/)`;
        break;
        case "Unlicense":
      licenseURL = `[$(license)](http://unlicense.org/)`;
      break;
  }
    return licenseURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project uses ${license}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
