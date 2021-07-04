import React, { useContext } from 'react';
import { useAvatarSrc } from '../../../../utils/hooks';
import { getPublishTime } from '../../../../utils/js';
import postContext from '../../../context/postContext';
import UserBlock from '../../../UserBlock';
import styles from './textblock.css';

export default function TextBlock(): JSX.Element {
    const post = useContext(postContext);
    const avatarSrc = useAvatarSrc(post);

    return (
        <div className={styles.textBlock}>
            <div className={styles.authorInfoBlock}>
                <UserBlock
                    link={`https://www.reddit.com/user/${post.author}`}
                    avatarSrc={avatarSrc.replaceAll('&amp;', '&')}
                    userName={post.author}
                />
                <span className={styles.publishTime}>
                    <span className={styles.publish}>опубликовано</span>
                    {getPublishTime(post.created_utc ?? 0)}
                </span>
            </div>
            <h2 className={styles.postHeading}>
                <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.postLink}
                >
                    {post.title}
                </a>
            </h2>
        </div>
    );
}
