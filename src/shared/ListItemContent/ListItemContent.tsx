import React from 'react';
import styles from './listitemcontent.css';

interface Props {
    svg?: React.ReactNode;
    text?: string;
}

export default function ListItemContent({ svg, text }: Props): JSX.Element {
    return (
        <span className={`${styles.content}`}>
            {svg}
            {text}
        </span>
    );
}
