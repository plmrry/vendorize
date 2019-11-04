# Vendorize

Copy the contents of an NPM package into a local directory.

## What is Vendorizing?

Vendorizing is the practice of "including dependencies inside your own source tree as if they were part of your application" (via [Jeff Forcier](http://bitprophet.org/blog/2012/06/07/on-vendorizing/)).

## Example Usage

To vendorize the `request` library:

```
npx vendorize request
```

This will add the contents of the `request` library to a local `vendor` directory.

This results in the following directory structure:

```
- vendor
  - request
    - lib
    - CHANGELOG.md
    - index.js
    - LICENSE
    - package.json
    - README.md
    - request.js
```

You can also specify the name of the vendor directory (which defaults to "vendor"):

```
npx vendorize request libraries
```

This will add the `request` package to a local `libraries` directory.

## Using Vendorized Packages

You can install vendorized packages by running:
```
npm install file:vendor/[package-name]
```

This will **symlink** the package into `node_modules`.
