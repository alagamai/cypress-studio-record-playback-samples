const { defineConfig } = require('cypress');

module.exports = defineConfig({
	//this is to enable cypress studio record and playback feature
	experimentalStudio: true,
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		specPattern: 'cypress/e2e/**/*.js',
	},
});
