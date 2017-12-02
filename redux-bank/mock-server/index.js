const dyson = require('dyson');
const port = 3003;

dyson.bootstrap({
    configDir: `${__dirname}/services`,
    port: port
});

console.log(`Mock service is available on http://localhost:${port}`);
