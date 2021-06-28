import React from 'react';
import type { GenericListProps } from '../GenericList';
import GenericList from '../GenericList';
import styles from './basestyledlist.css';

interface BaseStyledListProps {
    className?: string;
}

export default function BaseStyledList({
    list,
    className,
}: GenericListProps & BaseStyledListProps): JSX.Element {
    return (
        <ul className={className}>
            <GenericList list={list} />
            <li className={styles.grey}>Закрыть</li>
        </ul>
    );
}
