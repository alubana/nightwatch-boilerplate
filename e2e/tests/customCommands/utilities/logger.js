/* eslint-disable no-console */
const fs = require('fs');

exports.command = function (message) {
  return this.perform(function () {
    fs.writeFile('execution.log', message + '\n', { flag: 'a' }, function (err) {
      if (err) throw err;
    });
    console.log(message);
  });
};
