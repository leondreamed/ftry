type FtryFunction<$Result extends unknown> = () => $Result;

function ftryFunction<$Result>(fn: FtryFunction<$Result>) {
  try {
    return [null, fn()] as const;
  } catch (error: unknown) {
    return [error] as const;
  }
}

function ftryPromise<$Error, $Result>(promise: Promise<$Result>) {
  var successFn = function (value: $Result) {
    return [null, value] as const;
  };
  var errorFn = function (err: $Error) {
    return [err] as const;
  };
  return promise.then(successFn, errorFn);
}

export default function ftry<$Type>(
  promise: Promise<$Type>
): Promise<[unknown, never] | [null, $Type]>;
export default function ftry<T>(fn: () => T): [unknown, never] | [null, T];
export default function ftry(functionOrPromise: any): any {
  if (typeof functionOrPromise === "function") {
    return ftryFunction(functionOrPromise);
  }

  if (Promise.resolve(functionOrPromise) === functionOrPromise) {
    return ftryPromise(functionOrPromise);
  }

  throw new Error("Argument must be a function or Promise");
}

export { ferror as ferr };
export function ferror<$Error>(err: $Error): [$Error, never] {
  return [err] as unknown as [$Error, never];
}

export { fresult as fres };
export function fresult<$Result>(result: $Result): [null, $Result] {
  return [null, result];
}
