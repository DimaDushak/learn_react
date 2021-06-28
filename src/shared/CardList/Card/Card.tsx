import React from 'react';
import styles from './card.css';
import CardDropdown from './CardDropdown';
import ControlBlock from './ControlBlock';
import Preview from './Preview';
import TextBlock from './TextBlock';

export default function Card(): JSX.Element {
    return (
        <li className={styles.card}>
            <TextBlock />
            <Preview />
            <ControlBlock />
            <CardDropdown />
        </li>
    );
}
