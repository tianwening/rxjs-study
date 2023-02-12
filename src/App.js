import { Observable, of, fromEvent, map, filter } from "./rxjs";

of(1, 2, 3)
  .pipe(map((x) => x * 2)) // [2,4,6]
  .pipe(filter((x) => x > 3)) // [4, 6]
  .pipe(map((x) => x + 1)) // [5, 7]
  .subscribe((value) => console.log(value));

export default function App() {
  return <div>hello world 123</div>;
}
