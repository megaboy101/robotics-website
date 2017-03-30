## TL;DR
To start developing:
- Make sure you have Node.js v6 or better (you can install it [here](https://nodejs.org/en/))
- Clone this repository
- Terminal command: `npm install` to load the necessary dependencies
- Terminal command: `npm start` to start the development server at localhost:3000 in the browser (wait for webpack to say `Succesfully Compiled`)
- Make changes to code, refresh page to see changes :D

# Priority List:

1. Set-up patreon account (Evan)


# Project files Breakdown

## .git
Version control files, you will never need to touch this folder - **don't delete it**

## node_modules
Code for all the dependency files, you will never need to touch this folder either - **if you delete it run** `npm install`

## dist
Generated folder used to house the production-grade site - **Do not touch this folder, it will delete itself if necessary**

## src
Holds all the applications raw code before being compiled, more on modifying this folder below

## .babelrc
Config file for compiler - **Don't delete it**

## .gitignore
Config file for git to ignore certain files/folders (in this case, all dependecy code is not tracked, its tracked seperately by package.json)

## favicon.ico
Icon file for the site icon as seen by the browser tab

## package.json
Metadata file containing the sites information like version, author, dependancies, git repos, and command scripts

## Procfile
Config file for Heroku - **Don't delete it**

## Readme.md
The readme file your reading right now

## webpack.config.[dev|prod].js
Config files for the development and production compilers respectively, dont modify these unless you know what your doing


# Project Flow
```
src/components/												src/stylesheets/
(The HTML components for each page)							(the scss for each page)
|															|
Routed by...												Organized into...
\/															\/
src/routes.js												src/stylesheets/main.scss
|															(alongside helpers/reset/variables.scss)
Which is piped into...										|
\/															|
src/App.js													|
|															|
Which is sent to...	 _______________________________________|
\/
src/index.js (the applications entry point)
|
Where it is converted to HTML/CSS using...
\/
render(<App />, document.getElementById('app'))
|
Which is then compiled using...
\/
webpack.config.[dev|prod].js AND .babelrc
|
Which Webpack then injects into the DOM at...
\/
src/index.html
|
Which can be seen using...
\/
server.js OR prodServer.js
|
Where it is served to the browser at...
\/
localhost:3000

```


# Modifying Files
## Modifying HTML
- This project uses [React](https://facebook.github.io/react/) to create dynamic HTML, so markup is stored in JavaScript files.
- All HTML is stored in `src/components/` organized by page (common is for multi-page HTML)
- The home page is split across multiple reusable files due to its complexity

Here is the basic anatomy of a React component:
```javascript
import React from 'react'; // Import the react library to have html in javascript
import Navigation from './Navigation.js'; // You can import html (components) from other files

// Components are functions that take return html (im using the new javascript arrow functions, functional programming ftw)
// const is a new way to write 'var', 'Component' is the name of the component
const Component = () =>
	<div> // All components must return one overall HTML element
		<Navigation /> // Imported components can be used XML style (remember to use capitalization)
		<h1>Some html</h1>
		<h2>Some more html</h2>
	</div>;

export default Component // Set the component as exportable, and default you can import it by name
```

To modify any html, simply modify the html in a component. To create new html, either modify an existing component or create a new one

## Modifying CSS
- This project uses [SCSS](sass-lang.com) (sassy-css) to have rich css with variables, functions, imports/exports, and scoping
- scss is just addons to css, you can write normal css and be completely file
- All scss is stored in `src/stylesheets/` organized by page
- Files starting with an underscore are not rendered to the browser, they must be imported to another file (this is done for arganization)
- All files are imported into a `base` file, and each base file is imported into a single `main` file that contains all the scss
- `helpers` is used for general css helper classes, `reset` is a general css reset, `variables` holds scss variables like colors and fonts that can then be used in the rest of the scss. That way colors and fonts can be changed in a centralized place
- The scss is automatically compiled to css via Webpack

## Modifying image files
- Images are all stored in `src/assets/` we only use .png around here B(
- Just add an image to the folder to make it available for use in the project
- To use it in HTML, just import the file into a component and set that import as the image `src`


# Terminal Commands
The application terminal commands can be viewed and modified in `package.json` under `scripts`.
Aside from 'start', all commands use the convention `npm run [command-name]`

#### start
- Called using `npm start`
- Starts the dev server at localhost:3000

#### remove-dist
- Deletes the /dist folder for a clean production build folder

#### clean-dist
- Deletes the /dist folder and creates a fresh one

#### build-html
- Generates a production HTML file which the React components are injected to

#### prebuild
- Creates a clean /dist folder and generates the production HTML *run using build*

#### build
- Runs the production compiler *runs prebuild, build, and postbuild*

#### postbuild
- Starts the production build server *run using build*

#### precompile
- Same as prebuild, but runs using locally installed commands instead of globally installed ones (used for Heroku)

#### compile
- Same as build, using local commands instead of global ones (used for Heroku)

#### postinstall
- Automatically called after `npm install` is run, calls the production compiler (used for Heroku)
