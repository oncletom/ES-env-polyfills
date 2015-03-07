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

For now, this has only been tested and used on Node.js™ 0.10


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

# Licence

ISC

MDN polyfills are [MIT licenced or dedicated to the Public Domain](https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses)

es6-set/map/weak-map and es6-promise are MIT-licenced (see package dependencies)