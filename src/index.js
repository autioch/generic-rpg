import './styles.scss';
import tag from 'lean-tag';

const paper = tag('.paper', [
  tag('.header', 'Physical traits'),
  tag('.field', [
    tag('.field-label', 'Age'),
    tag('.field-value')
  ]),
  tag('.field', [
    tag('.field-label', 'Eyes'),
    tag('.field-value')
  ]),
  tag('.field', [
    tag('.field-label', 'Height'),
    tag('.field-value')
  ]),
  tag('.field', [
    tag('.field-label', 'Weight'),
    tag('.field-value')
  ]),
  tag('.field', [
    tag('.field-label', 'Strength'),
    tag('.field-value')
  ]),
  tag('.field', [
    tag('.field-label', 'Occupation'),
    tag('.field-value')
  ]),
  tag('.field', [
    tag('.field-label', 'Name'),
    tag('.field-value')
  ]),
  tag('.field', [
    tag('.field-label', 'Intelligence'),
    tag('.field-value')
  ]),
  tag('.field', [
    tag('.field-label', 'Character'),
    tag('.field-value')
  ]),
  tag('.header', 'Skills'),
  tag('.field', [
    tag('.field-label', 'Physical'),
    tag('.field-value')
  ]),
  tag('.field', [
    tag('.field-label', 'Mental'),
    tag('.field-value')
  ]),
  tag('.field', [
    tag('.field-label', 'Paranormal'),
    tag('.field-value')
  ]),
  tag('.header', 'Gold'),
  tag('.header', 'Equipment')
]);

document.body.appendChild(paper);
