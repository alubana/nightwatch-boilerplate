const baseConfig = require('./nightwatch.base.js');

const testConfig = Object.assign({}, baseConfig, {
    src_folders: ['tests/src/'],
    output_folder: 'tests/reports/',
    custom_commands_path: [
        'tests/customCommands/',
        'tests/customCommands/utilities/',
        'tests/customCommands/navigation/',
        'tests/customCommands/waits/',
        'tests/customCommands/assertions/'],
    page_objects_path: ['tests/pageObjects/react-bank/'],
    globals_path: 'tests/globals.js'
});

module.exports = testConfig;