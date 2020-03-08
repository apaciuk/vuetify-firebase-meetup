## Vuetify Firebase Meetup

A meetup app built with Vue + Vuetify + Firebase, with Stylus sass..

## Features

* Basic authentication with Firebase

## Live Demo (fully working)



## Repo

https://github.com/xhostcom/vuetify-firebase-meetup.git

## Configuration

Edit main.js to initialize your own Firebase Database.

LIKE THIS:

Set up Firebase project first, and put auth keys/details in main.js, also select email auth option in firebase console and set auth in firebase auth rules tab to read/write true - IMPORTANT DO NOT MISS! or the user wont be allowed to register.

 "rules": {
   ".read": true,
   ".write": true
  }
}

## FAQ

Q. Is this normal?

A. Yes. This is perfectly normal.

## Author

Paul Anthony McGowan

## Author URL

https://www.xhostcom.com

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report



For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

...bash




