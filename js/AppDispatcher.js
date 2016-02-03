import EventEmitter from 'events';
const EVENT_NAME = "action";
class AppDispatcher {
  constructor() {
    this.emitter = new EventEmitter();
  }
  register(handler) {
    this.emitter.addListener(EVENT_NAME, handler);
  }
  unregister(handler) {
    this.emitter.removeListener(EVENT_NAME, handler);
  }
  dispatcher(action) {
    this.emitter.emit(EVENT_NAME,action);
  }
}

module.exports = new AppDispatcher();


