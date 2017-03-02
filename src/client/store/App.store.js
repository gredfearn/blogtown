import Dispatcher from '../dispatcher/App.dispatcher';
import Constants  from '../constants/App.constants';
import { EventEmitter } from 'events';
import assign from 'object-assign';
const CHANGE_EVENT = 'change';

let _state = {};

const Store = assign({}, EventEmitter.prototype, {
  getState: function() { return _state },
  emitChange: function(actionType) { this.emit(CHANGE_EVENT, actionType); },
  addChangeListener: function(callback) {this.on(CHANGE_EVENT, callback);},
  removeChangeListener: function(callback) {this.removeListener(CHANGE_EVENT, callback)},
  setBlogs: function setState(data) {_state.blogs = data; }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.GET_BLOGS:
      Store.setBlogs(action.data);
      break;
    default:
      return true;
  }

  Store.emitChange(action.type);
    return true;
});

module.exports = Store;
