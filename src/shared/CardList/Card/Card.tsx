import React from 'react';
import styles from './card.css';
import ControlBlock from './ControlBlock';
import DropdownButton from './MenuButton';
import Preview from './Preview';
import TextBlock from './TextBlock';

export default function Card(): JSX.Element {
    return (
        <li className={styles.card}>
            <TextBlock />
            <Preview />
            <ControlBlock />
            <DropdownButton />
        </li>
    );
}
