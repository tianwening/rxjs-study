export function isPromise(x) {
  return (
    ((x && typeof x === "object") || typeof x === "function") &&
    typeof x.then === "function"
  );
}
