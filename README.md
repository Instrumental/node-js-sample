# Instrumental Express Demo Application

This is a demo app showing how to use Instrumental in an Express app. Below you'll see some basic directions and then the original Express Demo README. Feel free to browse the [changes we've made](https://github.com/heroku/node-js-sample/compare/master...Instrumental:master) to see just how easy it is.

Add the Instrumental Agent to `package.json`.

```json
{
  "dependencies": {
    "instrumental-node": "^1.x"
  },
}
```

Run the installation:

```bash
npm install
```

Add the Instrumental Agent and configuration to your app:

```js
var I = require('instrumental-node');
I.configure({
  // from here: https://instrumentalapp.com/docs/tokens
  apiKey:  process.env.INSTRUMENTAL_API_KEY, // 'project_api_token',

  // optional, default shown
  host:    'collector.instrumentalapp.com',

  // optional, default shown
  enabled: true,
});
```

You can use the `enabled` to enable or disable the agent in different environments.

Now add instrumentation to your app wherever you'd like more info. For instance, if your users can create blog posts, perhaps you'll instrument blog post creation like so:
```php
I.increment("blog_post.create");
```



# node-js-sample

A barebones Node.js app using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone git@github.com:heroku/node-js-sample.git # or clone your own fork
cd node-js-sample
npm install
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using the web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [10 Habits of a Happy Node Hacker](https://blog.heroku.com/archives/2014/3/11/node-habits)
- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
