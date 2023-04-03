## Testing

#### Manual testing

- Write code <> preview & Test in Browser
- Very important: you see what other users will see
- Error-prone: it´s hard to test all possible combinations ans scenarios

#### Automated testing

- Code that tests your code
- Your can test everything, no matter what you changed
- You test the individual building blocks of your app
- Very techinical, but allows you to test ALL building blocks at once

## Understanding Different Kinds Of Tests

#### Unit tests

- Test the **individual building blocks** (functions, components) in isolation
- Projects typically contain dozens or hundreds of unit tests
- The idea is that if you test all the individual units, the overall application will also work
- **The most commom/important kind of test**

#### Integration tests

- Test the **combination** of multiple building blocks
- Projects typically contain a couple of integration tests
- **Also important, but focus on unit tests in most cases**

#### End-to-End (e2e) tests

- Test complete scenarios in your app as the use would experience them
- Repreduces what a real human would do with your web site
- Projects only contain a few of e2e tests
- **Important, but can also be done manually (partially)**

## What To Test & How To Test

- **What**: Test the different buildind blocks
- **How**: Test success and error cases, also test rare (but possible) results

## Understanding the Technical Setup & Involved Tools

- We need a tool for running our tests and asserting the results: **Jest**
- We need a tool for "simulating" (rendering) our React app / components: **React Testing Libray**
- Both tools are already set up for you when using create-react-app

## Writing tests - The Three "A"s

- **Arrange:** Set up the test data, test conditions and test environment
- **Act:** Run logic that should be tested (e.g execute function)
- **Asert:** Compare execution results with expected results

## Tests Suites

As your app grows, you typically will have dozens of tests, and to organize and group those different tests, you often organize them into different testing suites.Ex: All the tests belonging to one feature or one component, could be grouped into one testing suite.You create a testing suite by using the word **describe** function

## Setup testing with Vite

Install the folowing dependencies
`
npm install jest jest-environment-jsdom @babel/core @babel/preset-env @babel/preset-react @testing-library/jest-dom @testing-library/react @testing-library/user-event -D`

Create a folder on root directory

**.jest/setup-test.js**

Paste this code on the file above
`import "@testing-library/jest-dom";`

Then you paste the code below on **jest.config.js**

`module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/.jest/mocks/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};`
