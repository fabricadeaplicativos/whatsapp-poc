## Whatsapp POC

> Whatsapp messenger-like app based on [Polymer1.0](http://polymer-project.org) starter kit.

#### Prerequisites (for everyone)

The full starter kit requires the following major dependencies:

- Node.js, used to run JavaScript tools from the command line.
- npm, the node package manager, installed with Node.js and used to install Node.js packages.

**To install dependencies:**

1)  Check your Node.js version.

```sh
node --version
```

The version should be at or above 0.12.x. And npm **must** be runnable as **user** not administrator. If npm throws any ``ERR`` messages asking to run as administrator privileges **DO NOT**, and follow [this tutorial](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) instead.

2)  Run this command to install gulp, bower and project dependencies.
```sh
npm install -g gulp bower && npm install && bower install
```

This lets you run `gulp` and `bower` from the command line.

#### Serve / watch

```sh
gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

#### Run tests

```sh
gulp test:local
```

This runs the unit tests defined in the `app/test` directory through [web-component-tester](https://github.com/Polymer/web-component-tester).

#### Build & Vulcanize

```sh
gulp
```
