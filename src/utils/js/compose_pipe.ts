/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export function compose<U>(...fns: Function[]) {
    return (initialValue?: any): U =>
        fns.reduceRight((arg, fn) => fn(arg), initialValue);
}

export function pipe<U>(...fns: Function[]) {
    return (initialValue?: any): U =>
        fns.reduce((arg, fn) => fn(arg), initialValue);
}
