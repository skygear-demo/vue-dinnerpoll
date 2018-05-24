# Dinner poll

A serverless polling web app using [Skygear](https://skygear.io/) as cloud database. https://vuedinnerpoll.skygeario.com/static/

Skygear features demonstrated:

* User Authentication: Sign in/up/out
* Cloud Database
  * Basic CRUD: CRUD a vote
* PubSub: Hot reloading when others voted
* Cloud Functions
  * Raw SQL execution
  * Trigger by Client SDK
    * `op` in JS cloud code (index.js)
    * `lambda` in JS SDK (ResultsChart.js)

## Quick start

Development:

```bash
git clone https://github.com/skygear-demo/vue-dinnerpoll.git
cd vue-dinnerpoll
yarn install # npm install, if you are using npm
yarn start
```

Deploying:

```bash
yarn build
yarn deploy
```

## Remarks for building Vue app with Skygear

* Rename the `dist` directory to `public_html` after building (This app has already been properly configured, see script.deploy in package.json)
* See .skyignore if you only want to push production code up to Skygear like this app
* Append /public_html in .gitignore to ignore production code

## Notes
* This app shares the same backend with react-dinnerpoll
* But the static front-end files are hosted in vue-dinnerpoll
