# Bands In Town
A simple React project where I can show a sample code of mine

## Libraries/Frameworks Used
- React
- Redux/Redux-Sauce
- Sagas
- Material-UI
- JSS
- Jest/Enzyme for Unit Testing

## Tools
- react-scripts
  - Encapsulates (with ability to eject and take full control):
    - Webpack, Babel, ESlint, ...

## File Structure
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    index.js
    ...app-scope-config-scripts,
    App/
      App
      Router
    Containers/
      Layout
      Pages...
      ...any-other-containers
    Redux/
      ConfigureStore
      ...all-application-redux-definitions
    Sagas/
      ...all-application-sagas
    Services
      ...any-reusable-pure-js-components
    Test/
      Helpers    
```

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

**Important Note: To run tests you have to have watchman installed, please refer to [this issue](https://github.com/facebook/create-react-app/issues/871), to install watchman please follow [the installation guide](https://facebook.github.io/watchman/docs/install.html) on the official website**

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!

## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

```sh
npm install --save react-router
```

Alternatively you may use `yarn`:

```sh
yarn add react-router
```
