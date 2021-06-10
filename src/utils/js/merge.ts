function merge<O extends Record<string, unknown>>(obj1: O) {
    return <K extends Record<string, unknown>>(obj2: K): O & K => ({
        ...obj1,
        ...obj2,
    });
}

export default merge;
