import React from 'react';
import styles from './layout.css';

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props): JSX.Element {
    return <div className={styles.layout}>{children}</div>;
}
