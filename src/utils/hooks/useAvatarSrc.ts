import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import postContext from '../../shared/context/postContext';
import tokenContext from '../../shared/context/tokenContext';
import { checkDataFromServer } from '../js';

export default function useAvatarSrc(post = useContext(postContext)): string {
    const [avatarSrc, setAvatarSrc] = useState('');

    const token = useContext(tokenContext);

    useEffect(() => {
        if (!token || !post.author) return;

        const getAvatarSrc = async () => {
            const { data } = await axios.get(
                `https://oauth.reddit.com/user/${post.author}/about`,
                {
                    headers: { Authorization: `bearer ${token}` },
                },
            );

            setAvatarSrc(data.data.icon_img);
        };

        checkDataFromServer(getAvatarSrc);
    }, [token, post]);

    return avatarSrc;
}
