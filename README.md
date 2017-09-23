## Brockley Coffee Crawl

## Table of Contents

- [What Is This?](#what-is-this)
- [The Technology Used](#the-technology-used)
- [Future Features](#future-features)

## What Is This?

A list of the best coffee shops in Brockley (South-East London). A project that was created to get used to creating full-stack apps.

## The Technology Used

This app uses React/Redux (Client-side), Node/Express (Server-side) and MongoDB/mongoose (Database).

The backend functions as a simple REST API that performs CRUD operations for locations and reviews.
The API contains two controllers which handle the CRUD operations. One controller for the locations and another for the reviews.
These controllers are fully unit tested, the test suite can be run using

```javascript
> npm run test-watch
```

The server-side code also includes the Mongo schemas for the locations and reviews. Strict types are used so little work is needed to process this data on the front end.
The App points to two separate Mongo Databases, one for the live site and a second that contains seed data for the Unit Tests. The latter resets every time the test suite is run.

To start the server the packages need to be installed via NPM and the following code needs to be entered in the terminal

```javascript
> npm run start-watch
```

this will kick off the server which will listen on PORT-5000. The client can be started by moving to the /client directory and running

```javascript
> npm start
```

The client side uses React and Redux. The views are generated using JSX and are rendered inside of the client/index.js file.
Only the components that are affected by start are class based components with the rest being function components.
As per Redux, this application utilises smart and dumb components.

Sass is the tech of choice for the CSS preprocessing and Webpack is used as the bundler.

## Future Features

Authentication

CSS Animations

Deploy to Heroku

Images

Improved UI