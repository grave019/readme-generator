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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
