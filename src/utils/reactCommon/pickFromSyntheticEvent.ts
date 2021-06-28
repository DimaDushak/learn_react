function pickFromSyntheticEvents<T extends HTMLElement>() {
    return <K extends keyof T>(key: K) => (fn: (arg: T[K]) => void) => (
        e: React.SyntheticEvent<T>,
    ) => fn(e.currentTarget[key]);
}

export const getValue = pickFromSyntheticEvents<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvents<HTMLInputElement>()(
    'checked',
);
