# robotics-website

Repository used to store all the files associated with the website construction projecthome


# PRIORITY LIST:

0. Finish production build code
1. Get new mentor pics
2. Fix navigation bug
3. Add photobucket ajax
4. Set-up patreon account (Evan)
5. Organize/standardize html/css
6. Write documentation

# FAQ

1. How is the code organized?
	- The core code for site is stored under the src folder. Assets holds images,
	  components holds html, and stylesheets holds the css. The App.js file is
	  the top-level component, it divides the site into pages. The routes.js file
	  maps each Url to a page-level component. The index.js file is the entry point
	  for the src code, it just imports and renders the CSS and html code. The index.html
	  file is the container that the application is injected to; the HTML is being
	  written in javascript, it needs a real html file to be read by a browser
	- The build-tools folder holds all the code to prepare the code in src to be
	  read by the browser, as well as a dev server. The majority of it is just code
	  to run the production-ready code.
	- .git is a folder for version control - don't delete it
	- node_modules contains all the code for external JavaScript libraries - don't
	  delete it.
	- .gitignore, .babelrc, and .eslintrc.json are configuration files - don't delete them
	- favicon.ico is for the icon shown in the tab panel of the browser, it's in
	  the project root for a reason.
	- Procfile is a config file for Heroku, and can be deleted if you are not using
	  Heroku to host the site
	- package.json contains metadata about the project itself, including author,
	  current version, external dependancies, repositories, and console commands
	- The 2 webpack.config files are setup files for the development site and production
	  site respectively. They outline how to compile to code, optimize it, bundle it,
	  and prepare it to be read by a browser.
