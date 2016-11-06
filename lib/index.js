'use strict';

const deps = require('./cedr-deps');
const globs = require('./cedr-globs');

module.exports = (page, library) => {
  let usedBlocks = deps(page);
  let usedFiles = globs(usedBlocks, library);

  return usedFiles;
};
