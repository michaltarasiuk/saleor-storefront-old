import {isDefined} from './is-defined';

export function allDefined<Value>(...values: readonly Value[]) {
  return values.every((value) => isDefined(value));
}
