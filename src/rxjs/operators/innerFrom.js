import { Observable } from "../internal/observable";
import { isPromise, isArrayLike } from "../utils";

export function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (isPromise(input)) {
    return fromPromise(input);
  }
  if (isArrayLike(input)) {
    return fromArrayLike(input);
  }
}

function fromArrayLike(arrayLike) {
  return new Observable((subscriber) => {
    for (let i = 0; i < arrayLike.length; i++) {
      subscriber.next(arrayLike[i]);
    }
    subscriber.complete();
  });
}

function fromPromise(promise) {
  return new Observable((subscriber) => {
    promise.then(
      (value) => {
        subscriber.next(value);
        subscriber.complete();
      },
      (error) => {
        subscriber.error(error);
        subscriber.complete();
      }
    );
  });
}
