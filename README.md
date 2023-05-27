# Generate test cases  using Cypress Studio feature 

# Prerequisites

The first thing we need to do is to setup our environment. So here are some things that you should have to start this project:

VSCode: https://code.visualstudio.com/download </br>
NPM: https://www.npmjs.com/get-npm </br>
NodeJS: https://nodejs.org/en/download

# Steps to enable cyrpess studio  
 1. enable experimentalStudio in cypress.config.js as below
 
	module.exports = defineConfig({
	
	//this is to enable cypress studio record and playback feature
	
	experimentalStudio: true,     <+++++
	
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		specPattern: 'cypress/e2e/**/*.js',
	},
	});
	
2. npx cypress open 
3. click on add new test -> execute steps => right click on element to add chai assertion 

## Use

1. Checkout the project from git - git clone https://github.com/alagamai/ypress-studio-record-playback
2. Navigate to the project root directory - cypress-studio-record-playback 
3. Install dependencies with `npm install` 
4. execute sudo npx cypress open 
    
# Application under test

https://automationteststore.com
