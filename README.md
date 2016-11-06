# cedr-deps [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Cedr-deps - Generating globs dependencies for cedr.


## Installation

```sh
$ npm install --save cedr-deps
```

## Usage

Used in conjunction with [cedr](https://github.com/antitim/cedr). Needed to generating globs dependencies for page.

```js
const deps = require('cedr-deps');

let library = {
  'menu': {
    templates: {
      'menu': '<div>Menu</div>',
      '__item': '<div>Menu item</div>'
    },
    styles: {
      'menu/style.css': 'test/lib1/menu/style.css'
    },
    scripts: {}
  },
  'page': {
    templates: {},
    styles: {
      'page/style.css': 'test/lib1/page/style.css'
    },
    scripts: {}
  }
}

let page = {
  block: 'page',
  content: [
    {
      block: 'text',
      content: 'text'
    },
    {
      block: 'page',
      element: 'header',
      content: 'Yeah!'
    }
  ]
};

deps(page, library); 
// Return { style: ['test/lib1/page/style.css'], script: [] }

```
## API

### cedr-deps(page, library)

#### page
Type: `Object`

The object of page.

#### library
Type: `Object`

The object of library.

Returns a `Object`:
```js
{
  style: [],
  script: []
}
```


## License

MIT © [antitim](http://vk.com/antitim)


[npm-image]: https://badge.fury.io/js/cedr-deps.svg
[npm-url]: https://npmjs.org/package/cedr-deps
[travis-image]: https://travis-ci.org/antitim/cedr-deps.svg?branch=master
[travis-url]: https://travis-ci.org/antitim/cedr-deps
[daviddm-image]: https://david-dm.org/antitim/cedr-deps.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/antitim/cedr-deps
