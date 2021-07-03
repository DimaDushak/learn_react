import React from 'react';
import authLink from './authLink';
import styles from './userblock.css';

interface Props {
    link?: string;
    avatarSrc?: string;
    userName?: string;
    className?: string;
}

export default function UserBlock({
    link = authLink,
    avatarSrc = '/static/image/AnonimIcon.svg',
    userName,
    className = styles.userBlockSizes,
}: Props): JSX.Element {
    return (
        <a
            href={link}
            className={`${styles.userBlock} ${className}`}
            target={link === authLink ? undefined : '_blank'}
            rel="noreferrer"
        >
            <img
                src={avatarSrc}
                alt="User avatar"
                className={styles.authorAvatar}
            />
            <span className={userName ? '' : styles.anonim}>
                {userName ?? 'Аноним'}
            </span>
        </a>
    );
}
