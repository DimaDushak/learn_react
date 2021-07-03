import React from 'react';
import type { PostData } from '../../../utils/hooks';
import postContext from '../../context/postContext';
import styles from './card.css';
import CardDropdown from './CardDropdown';
import ControlBlock from './ControlBlock';
import Preview from './Preview';
import TextBlock from './TextBlock';

interface Props {
    post: PostData['data'];
}

export default function Card({ post }: Props): JSX.Element {
    return (
        <li className={styles.card}>
            <postContext.Provider value={post}>
                <TextBlock />
                <Preview />
                <ControlBlock />
                <CardDropdown />
            </postContext.Provider>
        </li>
    );
}
