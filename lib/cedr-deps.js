'use strict';

/**
 * Функция рекурсивно обходит узлы страницы и добавляет имеющиеся блоки
 *
 * @param node {Object} Корневой узел
 * @param usedBlocks {String[]} Сюда будут добавляться используемые блоки
 */
function getBlock (node, usedBlocks) {
  // Узел отсутствует
  if (node === undefined) return;

  // Текстовый узел
  if (typeof node === 'string') return;

  // Блок
  if (node.block) {
    // Если блок отсутствует в списке зависимостей, то добавляем его туда
    if (usedBlocks.indexOf(node.block) === -1) usedBlocks.push(node.block);

    getBlock(node.content, usedBlocks);

    return;
  }

  // Список узлов
  if (typeof node === 'object') {
    for (let i in node) {
      getBlock(node[i], usedBlocks);
    }

    return;
  }
}

/**
 * Рендерит страницу и возвращает список файлов стилей и скриптов используемых на странице
 *
 * @param page {Object} Объект страницы
 *
 * @return {String[]} Используемые блоки
 */
module.exports = (page) => {
  /**
   * Список используемых блоков
   *
   * @type {string[]}
   */
  let usedBlocks = [];

  getBlock(page, usedBlocks);

  return usedBlocks;
};
