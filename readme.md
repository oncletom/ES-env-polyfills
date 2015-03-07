# ES-env-polyfills

Adding a bunch of polyfills to your Node.js environments!


# Install

````sh
npm install ES-env-polyfills --save
````


# How to use it

Just `require` it before anything else (so dependent packages can benefit from the polyfills)

````sh
require('ES-env-polyfills');
````


# Potential limitations

For now, this has only been tested and used on Node.js™ 0.10.
It should work fine on 0.12 and [io.js](es6-promise) but in the unlikely case you run into problems, please file an [issue](https://github.com/DavidBruant/ES-env-polyfills/issues/new)


# Polyfills list

* Map
* Set
* WeakMap
* Object.assign
* Array.prototype.find
* Array.prototype.findIndex
* Array.from
* String.prototype.includes
* String.prototype.startsWith
* String.prototype.endsWith

These are only the polyfills I've been needing so far in various projects. This repo is happily accepting pull requests if you want to see other polyfills!

# Licence

ISC

MDN polyfills are [MIT licenced or dedicated to the Public Domain](https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses)

es6-set/map/weak-map and es6-promise are MIT-licenced (see package dependencies)