# NightwatchJS Automation Framework
Author: alubana@teksystems.com
## Installation

Install Redux-Bank and Deploy App
```sh
$ git clone repo link]
$ cd nightwatch-boilerplate/redux-bank
$ npm install
$ npm start
```

Install Nightwatch framework
```sh
$ cd nightwatch-boilerplate/e2e
$ npm install
$ npm run nightwatch --tag UI001
```

## Run all Tests
```sh
npm run nightwatch 
```
#### Run tests via @tags and select environment
```sh
npm run nightwatch -- --tag US11199 --e ie
```
Please refer to __./nightwatch.conf.js__ test_settings for list of available test environments.
All tests are inside ./src folder

2. Running a test on custom environment path
```sh
REACT_BANK_APP=http://dev.reactapp.allegisgroup.com npm run nightwatch -- --tag smoke --e phantomjs
```
Please refer to __./tests/globals.conf.js__ for default environment paths

## Running tests inside Docker containers
Prequisite: install docker and docker-compose

Start Selenium Hub with two nodes of FF and Chrome.
```sh
docker-compose up
```
Running nightwatch tests as normal. They will execute inside container.

Scale to multiple instances of browsers.
```sh
docker-compose scale chrome=10
```

Please not you can install VNC viewer to See inside the container.
Use 127.0.0.1:PORT
You can find the vnc port on host machine by
```sh
docker ps -a
```
Look for the node image and the mapped port to 5900.

Remember to close all docker instances
```sh
docker-compose down
```

## Nightwatch Configuration
All the global nightwatch configurations are stored in file *./nightwatch.conf.js*. And for test suite specific configuration please refer to *./tests/nightwatch.conf.js``*

#### Adding new browser drivers such as SafariDriver etc
Add path to driver binary in ``cli_args``. Then add, the browser configurations in ```test_settings```

## [Page Object Model](https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API)
Nighwatch supports pom. Each pom page must be added in *./tests/pageObjects*. The name of pom file is then used to instantiate objects. Refer to *gofundme.js* test.
Each pom should be declared in a separate *PomName.js* file under the *./tests/pageObjects*

You can declare page related methods and selectors in pom a file. You can add utility methods to *./tests/customCommands*
Elements declared in pom are using css selector by default. Although ``locateStrategy`` attribute can be added to use ``xpath``.
### Naming Convention
Create Page Models inside ./tests/pageObjects/accountHolder/~SamplePageName.js~
```js
const someModule = require('module');

module.exports = {
    url: 'dynamic url here or callback',
    elements: {
    //declare static locators
        mainTitle: {
            selector: '#main' //css selector
        },
        mainTitleSubheading: {
            selector: '//author', //xpath 
            strategy: 'xpath'
        }
    },
    labels: {
    //declare static text here or use callbacks for dynamic texts
        author_name: 'John Doe',
        some_title: "I'm a title",
    },
    //Declare methods related to functionality of page
    //See Custom commands for Global methods
    commands: [
        {
            el: function (elementName, child) {
                const element = this.elements[elementName.slice(1)]
                return util.format(element.selector, child)
            }
        }
    ]
};
```

## Custom Commands
Custom Commands are utility methods which can be globally called in test cases and inside pom methods. Please refer to *./tests/customCommands*
Please note as the filename is associated with the method, therefore __you can not create a new command with same  
(file)name (even in a separate folder).__

To create custom commands that can be chained to client/browser object, you need to return __this__ object.
Example: To create a command 'zoomIn()'
Create a file called __zoomIn.js__
```js
exports.command = function () {
    const _self = this;
      _self.execute('document.body.style.zoom = "300%";'); 
    return this;
};
```

### Loading Pages
Load Page Strategy has been split among three methods: 
1.  loadAppPage.js - Loads any application page. It waits for element #app to be visible before set time. Also, Checks and logs browser javascript errors.
2. loadAhPage.js - Loads only Account Holder App pages. Accepts as argument the page and acceptAlert which closes any active javascript alerts and loads page.
3.  loadGifterPage.js - Loads only Gifter App Pages. Otherwise similar to loadAhPage

Use cases
1. A typical usage in a page model for example Dashboard:
```js
loadPage: function (acceptAlert) {
                this.loadAhPage(this.api.globals.pages.dashboard, acceptAlert);
            }
````
2. A typical usage directly in a test case (not recommended)
```js
 //navigate to Email Page
 client.loadGifterPage(client.globals.pages.gifter.email_123);
````

Include a loadPage method as a custom command inside page modals. Refer to Dasboard Page Model.
Now you may load pages 
```js
 client.loadAhPage(client.globals.pages.dashboard);
```
Please note that load page waits for #app and for animation to disappear. If any exceptions such as timeouts are thrown the test will still continue as normal.

### Use Hooks
"Nightwatch provides the standard before/after and beforeEach/afterEach hooks to be used in the tests."
[Click Here](http://nightwatchjs.org/guide#using-before-each-and-after-each-hooks) for more info
```js
module.exports = {
    '@tags': ['US'],
    disabled: false,
    before: function (client) {
    // Set your cookie here
    client.setSecureCookie(1);
    //Navigate to page
    client.loadAhPage(client.globals.pages.dashboard);
    }
};
```
## Assertions
Framework provides bdd style [assertions](http://nightwatchjs.org/api#expect-api) based on Chai Expect. The assertions are can be chained to make a meaningful statement.

### Validating element text
You may use hardcoded text assertions. The string/text should be declared under corresponding Page Model.
```js
module.exports = {
    props: {
        amountTitle: 'Enter Your Gift Amount',
        minAmount: 'Minimum gift amount is $25.',
        maxAmount: 'Maximum gift amount is $100,000.',
    }
};
```
The assertion can be used in test case as follows
```js
    giftAmountPage.expect.element('@giftGrowTitle').text.to.be.equal(giftAmountPage.props.giftGrowTitle);
    giftAmountPage.expect.element('@giftGrowChartLegend').text.to.be.equal(giftAmountPage.props.yearsLegend);
```

You may use Chai Assertions directly.
```js
const expect = require('chai').expect; //using the chai directly

// Check all gift amount are valid
       client.elements('css selector', giftHistoryPage.elements.transAmount.selector, function (elements) {
            elements.value.forEach(element => {
                client.elementIdText(element.ELEMENT, result => {
                    expect(result.value).to.match(giftHistoryPage.props.transAmountRegEx);
                });
            });
        });
```
Refer to e2e/tests/src/e2e/accountHolder/giftHistory/giftHistoryUI.js for full usage.

___Recommendation___: Please only use hardcoded strings/texts which will be rarely modified.
For all other dynamic strings, please assert against text not being empty
Following assertion also verfies if the rendered text does not contain html tags or nbsp
```js
selectAccountPage.verifyTextNotEmpty('@mainTitleSubheading');
```