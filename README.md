# Typescript Starter with Webpack

## Description

My main objective on this repo is to have a clean base to start coding **frontend** in Typescript without bindings to any framework. It's a good starting point to write frontend libraries.

Main features:

- Uses webpack
- You can development in ES2020 :tada:
- Transpiled to es5 (maximizing compatibility)
- Dotenv
- Checking format of commit messages
- Automatic changelog
- Eslint
- Prettier
- Checking on pre commit phase
- editorconfig
- Watcher
- Live reloading
- Tests setup
- Checking of tests before push
- Code docs generation

More to come:
  ...

## Installation

```
npm i
```

## Usage

Add your code in src and just run:

```
npm run build
```

To generate a bundle in dist folder.

Set NODE_ENV=production to create an uglified & optimized version
Set NODE_ENV=development to generate a version with sourcemaps

## Development

Live reloading at http://localhost:8000

```
npm start
```

Enable watcher

```
npm run watch
```

## Testing

We're using Jest:

```
npm t
```

To run in watch mode:
```
npm run test:watch
```

## Docs

Code docs generated with [TypeDoc](https://github.com/TypeStrong/typedoc)
```
npm ruu docs
```

## Analyse bundle
```
npm run stats
```
and push stats.json to some of these [suggested services](https://webpack.js.org/guides/code-splitting/#bundle-analysis)

## Updates

You can check updates in [CHANGELOG](./CHANGELOG.md)
