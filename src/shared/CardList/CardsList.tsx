import React from 'react';
import { usePostsData } from '../../utils/hooks';
import Card from './Card';
import styles from './cardslist.css';

export default function CardsList(): JSX.Element {
    const postsData = usePostsData();

    return (
        <ul className={styles.cardsList}>
            {postsData.map(({ data }) => (
                <Card key={data.id} post={data} />
            ))}
        </ul>
    );
}
