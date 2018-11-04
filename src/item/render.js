import tag from 'lean-tag';

const COL_SIZE = 6;

function field({ label = '', value = '' }) {
  const content = [
    label ? tag('.field-label', label) : false,
    tag('.field-value', value)
  ].filter((item) => !!item);

  return tag('.field', content);
}

function header({ label = '' }) {
  return tag('.header', label);
}

function columns({ items }) {
  return tag('.columns', items.map((col) => {
    const rows = col.items.map((item) => render(item)); // eslint-disable-line no-use-before-define

    return tag(`.column column-${col.size || COL_SIZE}`, rows);
  }));
}

const RENDERERS = {
  field,
  header,
  columns
};

function render(item) {
  const renderer = RENDERERS[item.type || 'field'];

  if (!renderer) {
    throw Error('Unknown item type ', item);
  }

  return renderer(item);
}

export default render;
