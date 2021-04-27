/* Setup for the Tutorial
There are two ways to complete this tutorial: you can either write the code in your browser, or you can set up a local development environment on your computer.

Setup Option 1: Write Code in the Browser
This is the quickest way to get started!

First, open this Starter Code (https://codepen.io/gaearon/pen/oWWQNa?editors=0010) in a new tab. The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

You can now skip the second setup option, and go to the Overview section to get an overview of React.

Setup Option 2: Local Development Environment
This is completely optional and not required for this tutorial!

-------------------------------
Optional: Instructions for following along locally using your preferred text editor

This setup requires more work but allows you to complete the tutorial using an editor of your choice. Here are the steps to follow:

- Make sure you have a recent version of Node.js installed.
- Follow the installation instructions for Create React App* to make a new project.

npx create-react-app my-app

- Delete all files in the src/ folder of the new project
Note: Don’t delete the entire src folder, just the original source files inside it. We’ll replace the default source files with examples for this project in the next step.

cd my-app
cd src

# If you're on Windows:
del *

# Then, switch back to the project folder
cd ..

- Add a file named index.css in the src/ folder with this CSS code (https://codepen.io/gaearon/pen/oWWQNa?editors=0100).
- Add a file named index.js in the src/ folder with this JS code (https://codepen.io/gaearon/pen/oWWQNa?editors=0010).
- Add these three lines to the top of index.js in the src/ folder: */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* Now if you run npm start in the project folder and open http://localhost:3000 in the browser, you should see an empty tic-tac-toe field.

We recommend following these instructions to configure syntax highlighting for your editor (https://babeljs.io/docs/en/editors/).


-------------------------------
Help, I’m Stuck!
If you get stuck, check out the community support resources (https://reactjs.org/community/support.html). In particular, Reactiflux Chat (https://discord.gg/reactiflux) is a great way to get help quickly. If you don’t receive an answer, or if you remain stuck, please file an issue, and we’ll help you out.

-------------------------------
* Create React App
Create React App (https://github.com/facebookincubator/create-react-app) is a comfortable environment for learning React, and is the best way to start building a new single-page application (https://reactjs.org/docs/glossary.html#single-page-application) in React.

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your machine. To create a project, run:

npx create-react-app my-app
cd my-app
npm start

Note: npx on the first line is not a typo — it’s a package runner tool that comes with npm 5.2+.

Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.

When you’re ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. You can learn more about Create React App from its README (https://github.com/facebookincubator/create-react-app#create-react-app--) and the User Guide (https://facebook.github.io/create-react-app/).
*/