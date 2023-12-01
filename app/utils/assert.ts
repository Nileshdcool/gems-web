export function assert(value: any, message = "must be defined"): asserts value {
  if (!value) {
    throw new Error(message);
  }
}

export function assertValue<T>(
  value: T | undefined | null,
  message = "must be defined"
): T {
  if (value != null) {
    return value;
  } else {
    throw new Error(message);
  }
}
