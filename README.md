# ATG Interview for Sara Chaparro

## How to run it
- Make sure you have Node/NPM
- install yarn: `npm install --global yarn`
- run `yarn start` - this should open your browser up to `http://localhost:3000/`

## Basic run through of dev process
- I'm using an old laptop that needed nope/npm/yarn installed, so setup happened first
- Used [Create React App](https://github.com/facebook/create-react-app) to get initial project up and running. Command to add typescript is simply `yarn create react-app my-app --template typescript`
- Broke out structure to components and service for the API calls
- Tried out a couple ways to nest the API calls - initially I had the second individual story query as a separate call that was called from the single Article component. However, I prefer to always pass in info to be as simply read as possible to lower level components so I decided to do all the data prep in the parent ArticleList component
- No tests were added for time, although I'm confident in working with Jest and mocking services.
- I added a loader effect to ease the loading effect a bit. I found an svg from [Sam Herbert](https://samherbert.net/svg-loaders/) and optimized it by 91% using an [SVG minifier](https://svgomg.net/)
- I used header tags to ease accessibility of page and access to links quickly
- Finally, I added styling. I usually like SCSS for its nesting capabilities but I kept built-in css since the styling wans't that extensive

## Notes about code
- I kept some built-in code like the CWV ability that is currently not having anything passed into it and the testing setup file (it just adds jest)
- I also kept the out of the box HTML markup and assets in the public folder (I did change the title attribute for tab tracking)
- There was a choice on my part to use simply divs as opposed to a list of stories - this was purely to use headers for accessibility purposes since it is the only content on the page. If there was more content on the page, I would have made this an standard labeled list with each article wrapped in a list item tag.


# CREATE REACT APP documentation - not by Sara Chaparro

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
