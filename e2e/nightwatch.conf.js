const baseConfig = require('./nightwatch.base.js');

const testConfig = Object.assign({}, baseConfig, {
  src_folders: ['tests/src'],
  output_folder: 'reports',
  custom_commands_path: [
    'tests/customCommands/',
    'tests/customCommands/utilities/',
    'tests/customCommands/navigation/',
    'tests/customCommands/waits/',
    'tests/customCommands/assertions/',
    'node_modules/nightwatch-vrt/commands',
    './node_modules/nightwatch-axe/src/commands',
  ],
  custom_assertions_path: [
    'node_modules/nightwatch-vrt/assertions',
    'tests/customAssertions'
  ],
  page_objects_path: ['tests/pageObjects/react-bank'],
  globals_path: 'globals.js'
});

module.exports = testConfig;
