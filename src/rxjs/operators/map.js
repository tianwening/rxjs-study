import { Observable } from "rxjs";

export function map(project) {
  return (source) => {
    return new Observable((subscriber) => {
      return source.subscribe({
        ...subscriber,
        next(value) {
          subscriber.next(project(value));
        },
      });
    });
  };
}
