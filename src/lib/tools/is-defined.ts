export function isDefined<Value>(value: Value): value is NonNullable<Value> {
  return value !== null && value !== undefined;
}

export function areDefined<Value>(...values: readonly Value[]) {
  return values.every((value) => isDefined(value));
}
