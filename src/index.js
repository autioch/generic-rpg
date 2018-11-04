import definition from './definition.json';
import { render } from './item';
import './styles.scss';

const content = render(definition);
const paper = document.querySelector('.paper');

paper.appendChild(content);
