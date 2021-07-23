import { component } from '@ember/component';
import { action } from '@ember/object';

export default class PeopleListComponent extends component {
  @action showPerson = (person) => {
    return alert(`You clicked on ${person}`);
  };
}
