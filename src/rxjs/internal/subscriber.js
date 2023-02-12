import { isFunction } from "../utils";
import { Subscription } from "./subscription";

export class Subscriber extends Subscription {
  isStopped = false;
  constructor(observerOrNext) {
    super();
    let observer;
    if (isFunction(observerOrNext)) {
      observer = {
        next: observerOrNext,
      };
    } else {
      observer = observerOrNext;
    }
    this.destination = observer;
  }
  next(...args) {
    if (!this.isStopped) {
      this.destination.next(...args);
    }
  }
  error(...args) {
    this.destination.error(...args);
  }
  complete(...args) {
    if (!this.isStopped) {
      this.isStopped = true;
      this.destination.complete?.(...args);
    }
  }
}
