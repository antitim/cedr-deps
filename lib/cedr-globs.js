'use strict';

/**
 * Функция собирает список стилей и скриптов используемыхв в блоках usedBlocks
 *
 * @param usedBlocks {Array||Boolean} Список используемых блоков
 * @param library {Object} Библиотека блоков
 *
 * @returns {{ styleFiles: String[], scriptFiles: String[] }}
 */
module.exports = function (usedBlocks, library) {
  let styleFiles = [];
  let scriptFiles = [];

  // Если необходимо собрать зависимости всех блоков что есть в библиотеке
  if (usedBlocks === true) {
    usedBlocks = Object.keys(library);
  }

  for (let i in usedBlocks) {
    let block = library[usedBlocks[i]];

    if (block) {
      for (let j in block.styles) {
        let style = block.styles[j];

        if (styleFiles.indexOf(style) === -1) {
          styleFiles.push(style);
        }
      }

      for (let j in block.scripts) {
        let script = block.scripts[j];

        if (scriptFiles.indexOf(script) === -1) {
          scriptFiles.push(script);
        }
      }
    }
  }

  return {
    style: styleFiles,
    script: scriptFiles
  };
};
