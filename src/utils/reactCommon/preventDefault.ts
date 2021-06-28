/* eslint-disable @typescript-eslint/no-explicit-any */
import { compose } from 'redux';

export function preventDefault(fn: (arg: any) => void) {
    return (e: React.SyntheticEvent<any>): void => {
        e.preventDefault();
        fn(e);
    };
}

export function stopPropagation(fn: (arg: any) => void) {
    return (e: React.SyntheticEvent<any>): void => {
        e.stopPropagation();
        fn(e);
    };
}

type EventArgFn = (e: React.SyntheticEvent<any>) => void;

export const preventAll = (fn: (arg: any) => void): EventArgFn =>
    compose<EventArgFn>(preventDefault, stopPropagation)(fn);
