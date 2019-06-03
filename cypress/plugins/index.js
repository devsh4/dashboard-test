// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  // This allows us to set up multiple cypress environments if needed.
  // Individual cypress configs are found ion the cypress/config folder.
  // To add a new one.

  // Integration config makes use of undocumented json option, 'hosts'
  // to help us to resolve the proper hosts to the dockerized localhost
  // https://github.com/cypress-io/cypress/issues/1488
  // If this is ever deprecated or changes, we may need to altar the hosts file
  // inside the cypress docker container

  /*if (process.env.CYPRESS_ENV === 'integration') {
    // Total overwrite of the global default config file here.
    // Anything returned from the plugin is taken as the config object for tests.

    // note: use object spread of assign in the future to only overwrite properties.
    return integrationConfig;
  }*/

  return config;

  // great place to add environment variables, etc to our tests.
  // Can also import environment specific configs and overwrite the base config.
};
