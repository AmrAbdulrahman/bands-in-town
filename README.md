# Bands In Town
A [simple React application](https://bandsintown.herokuapp.com/) that connects to the [BandsInTown API](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0#/artist_information).<br>
- Where users can
  - Search events by *Artist Name*
  - Filter events by *Event Date*

## Why?
It's completely for-fun project, where I can show a sample React/Redux application of mine.

## Screenshot
![Screenshot](https://raw.githubusercontent.com/AmrAbdulrahman/bands-in-town/master/screenshot/screenshot.png)

## Libraries/Frameworks Used
- React
- Redux/Redux-Sauce
- Sagas
- Material-UI
- JSS
- Jest/Enzyme for Unit Testing

## Tools
- [react-scripts](https://github.com/facebook/create-react-app/blob/master/README.md#getting-started)
  - Encapsulates (with ability to eject and take full control):
    - Webpack, Babel, ESlint, ...
  - We can smoothly build/deploy our React applications with [zero configurations](https://github.com/facebook/create-react-app#philosophy)
  - We're not locked in, and we can [eject](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) at any point of time to have full control over webpack/babel plugins/eslint/... and all other tools.

## UI
- I've used [Material-UI](https://material-ui.com/) which's an awesome implementation of the Material Design for React
- I've used [JSS](http://cssinjs.org/?v=v9.8.1) for the styling
- Layouts/Components are based on [Flex-Grid](https://material-ui.com/layout/grid/#grid), the application is completely **responsive**.

## Testing
**Important Note: To run tests you have to have watchman installed, please check [this issue](https://github.com/facebook/create-react-app/issues/871) for more details, to install watchman please follow [the installation guide](https://facebook.github.io/watchman/docs/install.html) on the official website**

- I'm following the *philosophy* of trying to isolate components as much as possible and test it independetly. ([that's a good article that explains this philosophy](https://hacks.mozilla.org/2018/04/testing-strategies-for-react-and-redux/))
- shallow tests have been provided for all components
- more detailed tests have been provided for
  - [Artist Compoenent](https://github.com/AmrAbdulrahman/bands-in-town/blob/master/src/Components/Artist/test.js)
  - [Event Component](https://github.com/AmrAbdulrahman/bands-in-town/blob/master/src/Components/Event/test.js)

## Deployment
- I deploy the application on [Heroku](https://www.heroku.com/)
  - I use buildpack [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack)
- The deployment is hooked up with Github and configured to automatically deploy every time the code is `push`ed to the `master`.
  - In a real application env, we should change the configuration to deploy from specific `stable` branch
- loggers are configured only on `development` environment

## Redux State Design
- I have designed the redux store so that I cache Artists by `name`
- Given that the `Events` API returns objects not ids, and as results are based on `name`/`fromDate`/`toDate`, I've decided to keep the events volatile.
- It's important to note that the API sometimes returns results for Artists that their names are *guessed*
  - Example `h` returns results for `Steve Hogarth`
  - That's why I keep the name in the [results object](https://github.com/AmrAbdulrahman/bands-in-town/blob/master/src/Redux/Events.js#L45)
- It's also important to note that sometimes API returns error for not found artists.
  - Example `john reeeed` throws `403 Forbidden Error`

## Extra features than [required](https://github.com/AmrAbdulrahman/bands-in-town/blob/master/REQUIREMENTS.md)
- I have deep linked the search filters into the query parameters so that you can have shareable links.
  - That's an event for [John, on Friday, March 6th 2015](https://bandsintown.herokuapp.com/?name=john&dateFrom=2015-03-06&dateTo=2015-03-07)
- I've also added a Location GoogleMap for events.

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

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!  
