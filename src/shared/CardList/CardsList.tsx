import React from 'react';
import Card from './Card';
import styles from './cardslist.css';

export default function CardsList(): JSX.Element {
    return (
        <ul className={styles.cardsList}>
            <Card />
        </ul>
    );
}
