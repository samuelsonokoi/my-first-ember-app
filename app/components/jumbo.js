import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class JumboComponent extends Component {
  @tracked name = 'Ember';
}
