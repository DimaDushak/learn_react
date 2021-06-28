import { v4 as uuidv4 } from 'uuid';

type AssocDeepReturn<
    K extends string,
    O extends Record<string, unknown>,
    T
> = K extends keyof O ? Omit<O, K> & Record<K, T> : O & Record<K, T>;

function assoc<K extends string, T>(key: K, value: T) {
    return <O extends Record<string, unknown>>(obj: O) =>
        ({
            ...obj,
            [key]: value,
        } as AssocDeepReturn<K, O, T>);
}

const assignId = <O extends Record<string, unknown>>(
    obj: O,
): AssocDeepReturn<'id', O, string> => assoc('id', uuidv4())(obj);

export default assignId;
