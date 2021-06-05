import React from 'react';
import { MenuIcon } from '../../../Icons';
import styles from './menuButton.css';

export default function MenuButton(): JSX.Element {
    return (
        <button type="button" className={styles.menuButton}>
            <MenuIcon />
        </button>
    );
}
