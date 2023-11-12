export { ftry };
export default function ftry<$Type>(promise: Promise<$Type>): Promise<[unknown, never] | [null, $Type]>;
export default function ftry<T>(fn: () => T): [unknown, never] | [null, T];
export { ferror as ferr };
export declare function ferror<$Error>(err: $Error): [$Error, never];
export { fresult as fres };
export declare function fresult<$Result>(result: $Result): [null, $Result];
