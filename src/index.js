import definitionUrl from './definition.json';
import { render } from './item';
import './styles.scss';

function renderSheet(definition) {
  const content = render(definition);
  const paper = document.querySelector('.paper');

  paper.appendChild(content);
}

window
  .fetch(definitionUrl)
  .then((resp) => resp.json())
  .then((definition) => renderSheet(definition));
