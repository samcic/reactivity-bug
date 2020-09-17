import {action} from '@ember/object';
import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import {tracked} from "@glimmer/tracking";

export default class MyComponentComponent extends Component {
  @service store;
  @tracked itemcontainer = this.store.createRecord('itemcontainer', {items: [this.store.createRecord('item', {})]});

  get itemsLength() {
    return this.itemcontainer.items.length;
  }

  @action
  add() {
    this.itemcontainer.items.pushObject(this.store.createRecord('item', {}));
  }

  @action
  clear() {
    this.itemcontainer.items.clear();

    // The following line gives the same result
    // this.itemcontainer.items.setObjects([]);
  }
}
