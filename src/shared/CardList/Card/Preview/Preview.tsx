/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react';
import postContext from '../../../context/postContext';
import styles from './preview.css';

export default function Preview(): JSX.Element {
    const post = useContext(postContext);

    const imgSrc = post.preview?.images[0].source.url;

    return (
        <>
            {imgSrc && (
                <div className={styles.preview}>
                    <img
                        className={styles.previewImage}
                        alt="Post picture"
                        src={imgSrc.replaceAll('&amp;', '&')}
                    />
                </div>
            )}
        </>
    );
}
