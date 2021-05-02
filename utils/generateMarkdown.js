// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 const licenseLink = renderLicenseLink(license)
 return `![${license}](${licenseLink})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://img.shields.io/badge/License-${license}-red`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const mitDescription = `The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.`

  const bsdDescription = `BSD licenses are a family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software. This is in contrast to copyleft licenses, which have share-alike requirements`

  const ApacheDescription =`Apache license is a permissive free software license written by the Apache Software Foundation. It allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties.`

  if(license === 'mit'){
    return mitDescription;
  }else if(license === 'bsd'){
    return bsdDescription;
  }else if(license === 'Apache'){
    return ApacheDescription;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}

  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [email](#email)
  - [GitHub](#GitHub)
  
  ## Description
  ${data.Description}

  ## Installation 
${data.Installation}

## Usage 
${data.Usage}

## License
${renderLicenseSection(data.License)}

## Contributors
${data.Contributors}

## Test
${data.Test}

## Questions

Github:[${data.Username}](https://github.com/${data.Username}
  email: ${data.Email}
  `;
}
module.exports = generateMarkdown;

