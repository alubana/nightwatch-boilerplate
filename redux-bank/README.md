# Note: FORKED version of [redux-bank app](https://github.com/wdhorton/redux-bank)

This app has been modified to run a mocking service to perform various CRUD on Accounts and Transactions.
Please examine ./mock-server/services to verify the available services.

## Installing Dependencies
```sh
npm install
cd mock-server
npm install
```

## Start App and Mock Server
```sh
npm start
cd mock-server
npm start
```

## Add Delay to Mock Server
An integral part of testing is to test under stress. For this purpose, we have added a delay to the api service.
You can add a delay by simple modifying DELAY_SUBMITTING variable in redux-bank/mock-server/constants.js.
Example: To add 5 second delay on all services
```js
  DELAY: 5000,
  DELAY_SUBMITTING: 5000
```

## Mock Service Path and Info
 Examine ./mock-server/constants.js

# Redux Bank

Redux Bank is a banking application built using Node, Express, React, Redux, and Semantic UI.

View it live at http://reduxbank.com.
