import React from 'react';
import Icon, { EIcons } from '../Icon';
import styles from './basestyledlist.css';

interface Props {
    list: Array<{
        id: string;
        text: string;
        icon: keyof typeof EIcons;
    }>;
}

export default function BaseStyledList({ list }: Props): JSX.Element {
    return (
        <>
            <ul className={styles.list}>
                {list.map(({ id, text, icon }) => (
                    <li key={id} className={styles.listItem}>
                        <Icon name={EIcons[icon]} width={16} />
                        <span className={styles.listItemName}>{text}</span>
                    </li>
                ))}
            </ul>
            <button className={styles.closeButton} type="button">
                Закрыть
            </button>
        </>
    );
}
