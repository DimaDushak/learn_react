/* eslint-disable react/destructuring-assignment */
import { createElement } from 'react';

function withKey<E extends Record<string, unknown>>(key?: keyof E) {
    return <T extends React.ComponentType<E>>(component: T) => (
        props: E,
        index: number,
    ) =>
        createElement(
            component,
            { ...props, key: key ? props[key] : index },
            [],
        );
}

export const withKeyId = withKey('id');
export const withKeyIndex = withKey();
