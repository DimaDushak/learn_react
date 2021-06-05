import React from 'react';
import styles from './header.css';
import SearchBlock from './SearchBlock';
import SortBlock from './SortBlock';
import TitleBlock from './TitleBlock';

export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <SearchBlock />
            <TitleBlock />
            <SortBlock />
        </header>
    );
}
