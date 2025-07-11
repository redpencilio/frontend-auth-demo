import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BooksRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('book');
  }
}
