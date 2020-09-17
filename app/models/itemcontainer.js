import Model from '@ember-data/model';
import {hasMany} from '@ember-data/model';

export default class ItemContainerModel extends Model {
  @hasMany('item', {async: false}) items;
}
