Overview
===

This is boilerplate project for running Swagger UI with Webpack. It exists because:

* I wanted an easy way of slamming multiple API specifications into a Swagger UI-based project
* Using NPM/Webpack means my dependencies can be kept up-to-date easily
* I like it

Sure there's other ways of doing this, but still...

~There's also a Redoc page - although this is CDN-based as I am lazy.~ I removed the Redoc version for the time being.

Usage
===

To use this project clone and cd into it then:

```bash
npm i
cp [your Swagger/OpenAPI specifcations as YAML] src/specs
npm run dev
```

:thumbsup:

Improvements
===

* [ ] Parameterise API specification document name.
* [ ] Refactor `scripts/rewrite-urls.js` as a Webpack plugin.

