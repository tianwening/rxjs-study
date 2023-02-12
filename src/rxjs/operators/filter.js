import { Observable } from "rxjs";

export function filter(project) {
  return (source) => {
    return new Observable((subscriber) => {
      return source.subscribe({
        ...subscriber,
        next(value) {
          !!project(value) && subscriber.next(value);
        },
      });
    });
  };
}
