import { Subscriber } from "./subscriber";
export class Observable {
  constructor(subscriber) {
    if (subscriber) {
      this._subscriber = subscriber;
    }
  }
  subscribe(observerOrNext) {
    const subscriber = new Subscriber(observerOrNext);
    const teardown = this._subscriber(subscriber);
    subscriber.add(teardown);
    return subscriber;
  }
  pipe(operation) {
    return operation(this);
  }
}
