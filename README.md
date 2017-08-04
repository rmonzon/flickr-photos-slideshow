# Flick Photo SlideShow

## Project description
This is a very simple project built with React to play around with the [`Flick API`](https://www.flickr.com/services/api)

## Steps to run the project locally
Clone this repo on your machine

### 1. Installing dependencies
Make sure you have `node` installed, with a version greater than `7.0.0`. I used yarn instead of npm but if you're not
a fan a yarn yet, npm does the job as well.

Now run `yarn` or `npm i` in this repo to get your dependencies.

### 2. Serving the app
By default, you can run `yarn start` or `npm start` to run your app, I used Webpack dev server for building purposes.
You'll notice this in package.json on the scripts section.

### 3. Running the tests
To run the tests you just need to run `yarn test` or `npm run test`

### 4. You're good to go!
By this step you should have the project running locally.

## Important things to point out
Tools I used on this project:

- React
- Redux
- Webpack
- Babel
- SASS
- postCSS
- Yarn
- Jest (https://facebook.github.io/jest)
- Enzyme (https://github.com/airbnb/enzyme)
- Sinon (http://sinonjs.org/)

I tried to be as simple as possible on this project, and there're a few improvements that can be made
to make it even better: 

- Add the `load more` functionality when you scroll to the end of the first 100 image search results
- Add some CSS animations to improve the experience when images are loading.
- Add tests for actions and reducers

:wink: