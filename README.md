# Vue.js: Progressively building an Single Page Application

## Learning Goals

After this lesson you will be able to:

- Understand the philosophy of Vue
- Enhance existing Vue applications
- The basics of routing with vue-router
- How to structure a project
- Manipulate the state of your app with Vuex
- Build around an API
- Scale an application up!

## Prerequisites 

- Promises

## What is Vue?

## Why Vue?

## Understanding the basics

### Simple setup

Vue is awesome for many reasons, one of them is that you can start using it without any setup, using **a single HTML file** is enough. There are no excuses to get stared learning it 😉.

Let's use a basic HTML file:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My super Vue App</title>
  </head>
  <body>
    <div id="app">
      <p>Hello World</p>
    </div>
  </body>
</html>
```

Now let's add Vue using the [unpkg.com](http://unpkg.com/) CDN:

```html
<head>
  <meta charset="utf-8">
  <title>My super Vue App</title>
  <script src="https://unpkg.com/vue"></script>
</head>
```

And make the page alive!

```html
<body>
  <div id="app">
    <p>{{ message }}</p>
  </div>
</body>

<script>
new Vue({
  el: '#app',
  data: {
    message: 'Hello World'
  }
})
</script>
```

That's it! Open the HTML file in your browser to see it working. What's happening here?

- We are telling Vue to create a new instance in the `#app` element.
- Vue is interpolating text with the mustache syntax (`{{}}`)
- Vue is evaluating `{{ message }}` to the `Hello world` because that's the value we gave it in `data`

But... we have the exact same result as before...

![same result](https://media.giphy.com/media/TUZDNOhYyovXq/giphy.gif)

Okay, let's use a `directive`. Directives allows us to bind values and events to elements as well as performing complex actions to a specific element. Here, the `v-model` directive syncs an `input` with a variable defined in the `data`. Let's add it below the `p`:

```html
<input type="text" v-model="message"/>
```

If we now reload the page, we will see that the content of the input is `Hello World`. And even better, if we modify its content, the content of the page changes too!

Final HTML result:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My super Vue App</title>
  </head>
  <body>
    <div id="app">
      <p>{{ message }}</p>
      <input type="text" v-model="message"/>
    </div>
  </body>

  <script>
  new Vue({
    el: '#app',
    data: {
      message: 'Hello World'
    }
  })
  </script>
</html>
```

### Directives

### Binding

### Events

## Scaffolding a project with vue-cli

Nowadays, the front has evolved quite a bit, hasn't it? We don't have a single js file anymore. Since we ship more and more logic into the front-end, and web applications are so dynamic. We really need to split it up into multiple files.
On top of that the Web is evolving fast, and so is doing its language, Javascript. To adapt to this non-stopping evolution, we use tools like [Babel](http://babeljs.io/) to transpile our code-base and make it backwards compatible with less modern browsers. We all know who we're talking about.

![ie](https://media.giphy.com/media/10WeHUw6AuxWWQ/giphy.gif)

This project complexity has lead to new tools to make development and production bundling easier. Today, the best choice out there for applications is [Wepback](https://webpack.js.org/). It allows you to bundle together all of your front application assets, including not only javascript but also CSS, images, etc.

Because these complex setups usually share the same base, there are scaffolding tools to put that in place and let you add your whatever you need on top of that. Vue is no exception here and offers you a cli with many official production ready templates. The most used one is the [webpack template](https://github.com/vuejs-templates/webpack). And that's what we're going to use today.


Let's install the cli first:
```sh
npm install -g vue-cli
```

And then scaffold the project into a new directory `how2-app`:
```sh
vue init webpack how2-app
```

This will prompt you some questions. Choose the runtime build, we'll see why it's better in this scenario. Choose **not** to install vue-router because we will do that later. I recommend you to add [eslint](http://eslint.org/) and choose whatever code-style you prefer. You can skip adding any tests for the moment. Testing will be a whole different lesson on it own 😉.

**Don't forget to launch the dependencies installation, it may take a minute or two** 😁

```sh
cd how2-app
npm install
```

#### The runtime build

The runtime build is the lightest Vue build but requires tooling to transform the templates into javascript. The reason multiple builds exist is because some projects may not be able to add that tooling layer and since it's much more maintainable to write templates with Vue, the 6kb tradeoff is often well worth the cost.

### Project setup

The amount of files generated may look a bit overwhelming at first glance:

```
how2-app
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── Hello.vue
│   └── main.js
└── static

6 directories, 19 files
```

![project setup](https://media.giphy.com/media/KWn5YHuCzP3FK/giphy.gif)

> We went from 1 single HTML file to 19 files and 6 directories 😣

But don't panic! We all went through this at least once. Let me explain you really quick what is here:

- The `build` folder contains tooling files and we're not going to change anything there 😄
- The `config` folder allows you to configure how the application is bundled and we won't need to touch it either.
- I'm sure you guessed, the `src` directory contains the application code and that's where we are going to work 💪.
- The `static` folder allows you to put static assets that need to be copied _as-is_ without processing them by Webpack. We can put our Favicon there for example. It's different from the `src/assets` folder because that one is processed by webpack.

### Time to start the machine!

Now that we know how the project is organised, it's time to start it up and start developing!

```sh
npm run dev
```

This will launch webpack in development mode with hot reload module replacement, meaning, that only the necessary parts of the application are swapped without even reloading the page.

## How2

### Purpose

[how2](https://github.com/santinic/how2) is an npm package that allows you to lookup the answer of a programming-related question right from the terminal. It combines a Google search with the Stackexchange API to fetch the relevant questions and then its answers. Then it displays the most relevant answer and let you check other questions in case the displayed answer was not what you were searching for.

### Features

We are going to implement a subset of features to make our application ready to use:

- Ask a question and read the most relevant answer
- Display a list of all relevant questions
- When one of these question is clicked, display a list of answers, sorted by votes

So technically, this is a really small application, but we're going to take it seriously and implement it as if it will continue to get more and more features. In other words, **we are making a scalable app**. I know what you're thinking...


> An app with no test is a scalable as a 48h hackathon Single Page Application in jQuery

And it's true, it's hard to add different features at the same time if we have no tests. But trying to learn tests and how to scale our app at the same time is pretty big deal. So let's focus on one thing at a time and get it right ⚡️.

## Existing How2 API

talk about https://posva-how2.now.sh

- `/best-answer/:questionText`: best answer for a question
- `/questions/:questionText`: list of SO questions for a question
- `/question/:questionId`: Answers of an SO question

## Developing our own How2

Let's implement those features in our How 2 with Vue!

### Creating a shell

First of all, let's create a simple shell to put our app in. Let's use [Bulma](bulma.io) to get something fancy without writing much, if any CSS. Install it with `npm`:

```sh
npm install --save bulma
```

> Wait a moment, bulma is only a CSS lib, there's no Javascript!

That's right! But we got us covered with Webpack 😉. It's going to handle the CSS for us in different ways:

- In **dev** mode, it's going to inline it in the page
- In **production** mode (when bundling), it's going to extract it to a CSS file

The only thing we need to do is to import it as any other `js` module, let's add it to our `main.js` file, just after Vue:

```js
// main.js
import Vue from 'vue'
import 'bulma/css/bulma.css'
import App from './App'

// ...
```

Make sure to import the CSS file because by default, Bulma will point to the original SCSS files.

As for the basic shell, let's edit the `App.vue` file. This is the root component. This means that it's the root-most component and that every other component will be a child of it. You can see it as an entry point for Vue, where Vue do its magic.
Let's replace the whole template:

```html
<template>
  <section id="app" class="hero">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item" href="#">
              HOW2
            </a>
          </div>
        </div>
      </header>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container content">Here goes the content</div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs is-right">
        <ul>
          <li><a href="https://github.com/santinic/how2" target="_blank">how2</a></li>
          <li><a href="https://vuejs.org" target="_blank">Vue</a></li>
        </ul>
      </nav>
    </div>
  </section>
</template>
```
Now we can remove the `Hello` component since we don't need it anymore:

```html
<script>
export default {
  name: 'app'
}
</script>
```

And finally, we can replace the content of `style` with

```css
#app {
  min-height: 100vh;
}
```

To ensure the footer is always at the bottom, no matter how little content there is.

### Our project structure

There's a lot of ways to structure files in a project, and the truth is, there's no **right** way of doing it because a project structure should help developers to dive into code and add features. Therefore, it depends a bit on how the team works.
What actually matters is **how to split the code between different files** and how to make them work together.
So I'm going to show you a way of structuring projects that work well with Vue, allows you to keep files that are business related close, and makes it easy to dive into the project even if there are a lot of files.

The idea is to create business-named folders that represent a subset of your application routes. You can of course create sub folders for sub routes. Let's look at an example:

```
src
├── Account
│   ├── Membership.vue
│   └── User
│       ├── Profile.vue
│       └── components
│           └── EditableField.vue
├── Search
│   ├── Search.vue
│   └── components
│       ├── Result.vue
│       └── SearchInput.vue
└── ui
```

Here, `Membership`, `Profile`, and `Search` are views/pages of our app, they are used by the Router. `EditableField`, `Result`, and `SearchInput` are Business specific components.
Notice how business-related folders start with an uppercase letter (`Account`, `Search`) while type-related folders don't (`components`, `ui`).

> What about APIs? Are they Vue services?

There's nothing in Vue to handle services, we have to create them ourselves as regular sets of functions, objects or classes. This is better because it's simpler and easier to understand and therefore easier to test. This services can contain any kind of logic, from API calls to  data transformation functions. You can create a `service.js` file inside of the `Account` folder for instance. This file could look like this:

```js
// Account/service.js
export function getMembership () {...}
export function changeMembership () {...}
```

We will see how to consume these services once we start using [Vuex](vuex.vuejs.org).

### Adding a searchbar

Our app looks a bit empty at the moment. Let's add a searchbar. This will be the starting point to lookup a question. We are going to replace the `hero-body` content on our `App.vue`:

```html
<div class="hero-body">
  <div class="container">
    <h1 class="title">
      How to...
    </h1>
    <form>
      <div class="field">
        <label class="label"></label>
        <p class="control">
          <input class="input is-medium"
                  type="text"
                  placeholder="do permutations in python">
        </p>
      </div>
      <div class="field has-addons has-addons-centered">
        <p class="control">
          <button class="button is-primary is-large">
            Search
          </button>
        </p>
      </div>
    </form>
  </div>
</div>
```

It's looking good but we are only adding HTML for the moment. We want to display the results and connect to an api.

### StackOverflow Service

StackOverflow can be considered a business part of our application. We are going to have some views related to StackOverflow content. Actually, all of our application logic is going to be related to StackOverflow, but in the future we can imagine to plug in other services around Stackexchange. Let's create the folder and add a `service.js` file.

We are going to use [axios](https://github.com/mzabriskie/axios) to query the API so let's add it with `npm install --save axios`. Then we are going to create a base:

```js
// StackOverflow/service.js
import axios from 'axios'

const gso = axios.create({
  baseURL: 'https://posva-how2.now.sh'
})
```

This is were we could add other configuration options like headers. We will be able to reuse the `gso` (that stands for GoogleStackOverflew) factory later.

Now we can add our first function `getBestAnswer`

```js
export function getBestAnswer (question) {
  return gso(`/best-answer/${question}`)
    .then(({ data }) => data.items[0])
    .catch(err => {
      if (err.response && err.response.status >= 400 && err.response.status < 500) return null
      else throw err
    })
}
```

We cannot guess `posva-how2.now.sh` API, best way to get an overview of what we are retrieving from the API is to actually fetch it on our browser to inspect the result: [https://posva-how2.now.sh/best-answer/do%20permutations%20in%20python](https://posva-how2.now.sh/best-answer/do%20permutations%20in%20python).

The important thing is there is an `items` array that contains the answers with their body in markdown and they are sorted by votes. Since we only care about the best answer, we only need to return the first element in the array. We also have to take into account errors. To make it easy we could hide any errors from the user and returns `null` instead. But usually you want to handle them and throw any unexpected errors. We can catch those with a tool like [Sentry](https://sentry.io).

### Consuming the service

Let's test this service by first adding a `v-model` directive on the search input:

```html
<input class="input is-medium"
       type="text"
       v-model="question"
       placeholder="do permutations in python">
```

We also have to declare the `question` variable in the `data` property:

```js
export default {
  name: 'app',
  data () {
    return {
      question: ''
    }
  }
}
```

Now we can use the content of the input to call the service, so let's import it and create a method for that:

```js
import { getBestAnswer } from './StackOverflow/service'

// ...
methods: {
  search () {
    getBestAnswer(this.question).then(console.log)
  }
}
```

Finally, we add a listener on the `submit` event on the form:

```html
<form @submit.prevent="search">
```

It's important to `preventDefault` by using the `prevent` modifier because by default, the form reloads the page. Now we can test it by entering a question like `do permutations in python` and pressing Enter, or clicking the _Search_ button. After some seconds, we should see an object in the console containing the answer we want to display. We are ready to refactor things a bit and introduce **Routing** 🛤️.

### Adding Routing

Routing in Vue is achieved using its official plugin: [vue-router](router.vuejs.org). Let's start by adding it:

```sh
npm install --save vue-router
```

We are also going to add a `router.js` file at `src` where we are going to declare all of our routes and install the routing plugin:

```js
// router.js
import Vue from 'vue'
import Router from 'vue-router'

// Install the plugin
Vue.use(Router)

// Create a router
export default new Router({
  routes: []
})
```

We are also creating the Router instance with no routes for the moment. Finally, we need to inject the `router` instance into our Root instance, in the `main.js` file:

```js
// main.js
import App from './App'
import router from './router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```

This won't change anything on our App. Let's create our default route, `/`. In order to display content, the router uses a component called `router-view` that we can put anywhere in our application. Let's extract the content of `hero-body` to create the default view: `StackOverflow/Search.vue`, and let's not forget about the logic part!

```vue
// StackOverflow/Search.vue
<template>
  <div class="container">
    <h1 class="title">
      How to...
    </h1>
    <form @submit.prevent="search">
      <div class="field">
        <label class="label"></label>
        <p class="control">
          <input class="input is-medium"
                 type="text"
                 v-model="question"
                 placeholder="do permutations in python">
        </p>
      </div>
      <div class="field has-addons has-addons-centered">
        <p class="control">
          <button class="button is-primary is-large">
            Search
          </button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
// Notice how we adapted the import
import { getBestAnswer } from './service'

export default {
  data () {
    return {
      question: ''
    }
  },

  methods: {
    search () {
      getBestAnswer(this.question).then(console.log)
    }
  }
}
</script>
```

Back in `App.vue`, we can keep the script part simple:

```js
// App.vue
export default {
  name: 'app'
}
```

As for the `hero-body`, we have to replace it with the router's outlet: `router-view`:

```html
// App.vue
<div class="hero-body">
  <router-view></router-view>
</div>
```

Finally, we need to declare our route in the `router.js` file:

```js
// router.js
import Search from './StackOverflow/Search'
//...
export default new Router({
  routes: [
    {
      path: '/',
      component: Search
    }
  ]
})
```

If we visit our App, we will see everything works as before and that we got a `/#/` at the end of the route. This is because the router is setup using `hash` mode by default because it's compatible with more browsers (yeah, specially IE9) but we can use other [modes](https://router.vuejs.org/en/api/options.html#mode).

### Displaying the _Best Answer_

Into adding the main feature of our App: The best answer. We are already fetching it, we could create a new view to display it and go to that view once the data is ready. Let's create a new `BestAnswer.vue` file in the `StackOverflow` folder:

```vue
// StackOverflow/BestAnswer.vue
<template>
  <div class="container">
    <h1 class="title is-4">
      {{ question }}
    </h1>
    <pre>{{ bestAnswer.body_markdown }}</pre>
  </div>
</template>
```

But, wait a minute... How are we going to get the `bestAnswer`? We could fetch it again but that wouldn't be optimal, specially when dealing with a rate limit API like we are. We need to share the best answer fetched in the `Search` view with our new `BestAnswer` view. This is what we call a piece of App state. It's like a global piece of the `data` property in a component. We could store everything in the Root component since we have access to it with `$root` but that would get really messy with time as it's not a scalable approach. We need something to handle the App state, something like [Vuex](https://vuex.vuejs.org/). As with the router, we first need to install it:

```sh
npm install --save vuex
```

**Vuex is more complicated than the router, so don't worry if you don't understand everything right away, it will need practice.**

TODO explain Vuex
- principles
- state = read only
- mutations
- getters
- actions
- modules

Similarly to the router, we are going to create a `store.js` file and initiate there the Store for our App data:

```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({})

export default store
```

Then, we add it to our Root instance in `main.js`:

important to initialise state
TODO how to store the question on the state
explain namespaced vs types
why so complicated? to test
why we separate in so many files

### Storing the best answer on the state

- actions return promises
- using helpers
- loading state in search view
- fieldset trick

### Display the best answer

- handle markdown
  - create a comp using marked3
  - local plugin
  - render function, short note about virtual dom and react
- missing error handling

### HMR for Vuex

- no full reload when modifying mut, actions, gets

### List other relevant questions

- add action
- fetch list, where, why
- Add view
- List of links
- extract question id
- refactor errHandler in actions

### Display answers for another question

- mutations that reuse getters
- prepareSelected action -> multiple commits
- Selected question getter
- Use markdown to display answers

## Summary

## Exercises

- Display error messages when no answers are found
- Handle data fetching when directly visiting the best-answer
- Handle data fetching when directly visiting a question
  - Fetch questions before fetching answers
- Create a global filter to strip ` - StackOverflow` from titles

## Extra resources
