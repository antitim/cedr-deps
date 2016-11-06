'use strict';

require('chai').should();

let deps = require('../lib/');
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
};

describe('Cedr', () => {
  it('deps', () => {
    let usedFiles = deps({
      block: 'page',
      content: [
        'text'
      ]
    }, library);

    usedFiles.should.deep.equal({
      style: ['test/lib1/page/style.css'],
      script: []
    });
  });
});
