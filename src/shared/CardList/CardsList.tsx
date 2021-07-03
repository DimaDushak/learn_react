import React from 'react';
import { usePostsData } from '../../utils/hooks';
import postContext from '../context/postContext';
import Card from './Card';
import styles from './cardslist.css';

export default function CardsList(): JSX.Element {
    const postsData = usePostsData();

    return (
        <ul className={styles.cardsList}>
            {postsData.map(({ data }) => (
                <postContext.Provider value={data} key={data.id}>
                    <Card />
                </postContext.Provider>
            ))}
        </ul>
    );
}
