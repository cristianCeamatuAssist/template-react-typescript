# This is a React Typescript Redux Toolkit template

> Extra notes, ex: We recommend visiting the app from a desktop/notebook because it is not mobile responsive

<!--
## Core functionality
****
- Users can securely login in the app
- Users can add call through a form or by uploading a CSV file
- Users can filter/sort/search the call list
- Users can start calls and see the transcript of the conversation between the Virtual Agent and the contact
- Users can listen the audio stream of the conversation
- Users can edit/ignore Virtual Agents responses, they can Take Over the conversation or Transfer the call to their phone number
- Users can collect valuable information when the call ends -->

## Table of Contents

- [This is a React Typescript Redux Toolkit template](#this-is-a-react-typescript-redux-toolkit-template)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Built With](#built-with)
  - [Live links:](#live-links)
  - [Tests](#tests)
    - [Tested with](#tested-with)
    - [All Tests (e2e and unit tests)](#all-tests-e2e-and-unit-tests)
    - [Unit Tests](#unit-tests)
    - [E2E Tests](#e2e-tests)
  - [Files and Folder Structure Conventions](#files-and-folder-structure-conventions)
  - [Useful links](#useful-links)
    - [Jira:](#jira)
    - [Confluence:](#confluence)
    - [Project design links:](#project-design-links)

## Prerequisites

To get this project up and running locally, you must have [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/) installed locally.

## Getting Started

**To get this project set up on your local machine, follow these simple steps:**

1. Run:

```
  > yarn install
```

2. From the root folder please run the following commands (this will lint you code before each commit):

   ```bash
     > npx husky install

     # IMPORTANT! Only if the .husky/pre-commit is not defined already or it does not contain `yarn lint-staged`
     > npx husky add .husky/pre-commit "yarn lint-staged"
   ```

3. Run `yarn start` to start the project, it should automatically redirect or you can now navigate to `http://localhost:3000` to view the app. The server refreshes every time you make a change to a file.<br>
4. Most important, enjoy the app!<br>

## Built With

- Typescript
- React.js create-react-app
- [Redux Toolkit](https://redux-toolkit.js.org/)
- Styled components
- And other goodies (check package.json)

## Live links:

- production:
- development:

<!-- ## Screenshot of the app.

![image](.github/images/capture.png) -->

## Tests

#### Tested with

- Cypress (E2E and unit tests)
<!-- - Jest (Unit tests)
- Selenium/Selenium Grid (Call load testing) -->

#### All Tests (e2e and unit tests)

1. Make sure you are in the root folder

2. Install dependencies (only if you did not install them previously): `yarn install`
3. Run `yarn start` to start your project locally

4. Run the tests with the command: `yarn run test`.

#### Unit Tests

1. Make sure you are in the root folder
2. Install dependencies (only if you did not install them previously): `yarn install`
3. Run the tests with the command: `yarn test:unit`

#### E2E Tests

1. Make sure you are in the root folder

2. Install dependencies (only if you did not install them previously): `yarn install`
3. Run `yarn start` to start your project locally

4. Run the tests on `http:localhost:3000` with the command: `yarn run cy:e2e` or on a prefered URL with the command: `yarn run test:e2e --config baseUrl=[URL to test]"

## Files and Folder Structure Conventions

    .
    ????????? archived (optional)                   # Components and functionality that is not used anymore but might be needed again in the future
    ????????? cypress                               # Basic Cypress installation components
    ???    ????????? integration/e2e                  # E2E tests
    |
    ????????? public                                # Basic React public folder (you can add the favicon, manifest.json or other inline scripts)
    ????????? build                                 # Files generated by the `yarn build` command
    ????????? src                                   # Source files
    |   ????????? state                             # Includes the global state management setup (ex: Redux Toolkit store and hooks)
    |   ????????? assets                            # Images, icons and downloadable files
    |   |   ????????? styles                        # The global theme and styles (styled-components used in our case)
    |   |   ????????? images                        # Images, can be structured per features (ex: posts, blog, team, contact page)
    |   |   ????????? icons                         # Icons, can be structured per functionality/use case (ex: generic, admin, public, dashboard)
    |   |   ????????? downloads                     # Downloads, can be structured per functionality/use case (ex: generic, GDPR)
    |   |
    |   ????????? components                        # React reusable TSX components (they do not hold any kind of global state)
    |   |   ????????? index.ts                      # Re-exports all exports from each file and folder (ex: `export * from './Loading'`)
    |   |   ????????? Loading
    |   |       ????????? index.ts                  # Re-exports all exports from each file and folder (ex: `export * from './LoadingAnimation'`)
    |   |       ????????? LoadingAnimation.tsx      # Contains an exported (not default export) reusable animation that accepts parameters (ex: { title, subtitle, color})
    |   |       ????????? LoadingBox.tsx          # Contains an exported (not default export) reusable box that accepts parameters (ex: { title, subtitle, iconComponent})
    |   |
    |   ????????? features                          # App features, ex: counter/calls/users
    |   |   ????????? counter                       # Holds all files and folders related to this feature (global state, api, utils, types, configs, model etc...)
    |   |       ????????? index.ts                  # Re-exports all exports from each file and folder (ex: `export * from './components'`)
    |   |       ????????? counterApi.ts             # The api service for this feature
    |   |       ????????? counterSlice.ts           # The reducer for this feature (ex: redux/mobx)
    |   |       ????????? counterUtils              # The utils functions required only for this feature (ex: convertTodoToArray)
    |   |       ????????? counterTypes              # The types required only for this feature (ex: ITodo, IPostResponse)
    |   |       ????????? counterAssets             # Images, icons and downloadable files the are needed only by the components belonging to this feature
    |   |       ????????? components                # React reusable TSX components (they hold global state provided by the counter feature)
    |   |           ????????? index.ts              # Re-exports all exports from each file and folder (ex: `export * from './Counter'`)
    |   |           ????????? Counter.tsx           # A component that uses global state provided by the counter slice
    |   |
    |   ????????? hooks                             # Generic hooks that need to be shared between components and features
    |   ????????? pages                             # Pages used by the app (could also be named `screens`)
    |   |   ????????? index.tsx                     # Re-exports all exports from each file and folder (ex: `export * from './Dashboard'`)
    |   |   ????????? Router.tsx                    # Holds the React router for the main pages
    |   |   ????????? Dashboard.tsx                 # Dashboard page (when the project get's bigger and you have lot's of pages they can be grouped in subfolders)
    |   |
    |   ????????? services                          # 3rd party services
    |   ????????? types                             # Generic types that need to be shared **between** components and features
    |   ????????? utils                             # Generic helper functionality that need to be shared between components and features, ex: `date.ts` (dates formatting) or `dom.ts` (dom manipulation)
    |   ????????? App.tsx                           # Basic React App component, we add our pages Router Component and custom High Order Components here, ex: Theme or GlobalStyles
    |   ????????? index.tsx                         # Basic React index.tsx file, we add wrapper provided by packages, ex: Router (react-router-dom) or Provider (react-redux)
    |
    ????????? .prettierrc.js                        # Settings for prettier formatting (this is important to keep consistency when multiple developers work on the same project)
    ????????? build-development.sh                  # Build command used for the development environment deploys to grab any required AWS secrets before running the build (very useful for CI/CD pipelines with different environment variables for each deployment)
    ????????? build-production.sh                   # Build command used for the production environment deploys to grab any required AWS secrets before running the build (very useful for CI/CD pipelines with different environment variables for each deployment)
    ????????? cypress.json                          # Cypress settings
    ????????? tsconfig.json                         # Typescript settings (make sure that `baseUrl: src` is set)

## Useful links

#### Jira:

- https://github.com

#### Confluence:

- [template.atlassian.net](https://github.com)

#### Project design links:
