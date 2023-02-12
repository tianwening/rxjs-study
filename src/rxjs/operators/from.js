import { innerFrom } from "./innerFrom";

export function from(args) {
  const hasOne = Array.isArray(args) && args.length === 1;
  return innerFrom(hasOne ? args[0] : args);
}
