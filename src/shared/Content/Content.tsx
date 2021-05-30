import React from 'react';
import styles from './content.css';

interface Props {
    children: React.ReactNode;
}

export default function Content({ children }: Props): JSX.Element {
    return <main>{children}</main>;
}
