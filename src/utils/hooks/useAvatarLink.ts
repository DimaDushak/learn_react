import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import postContext from '../../shared/context/postContext';
import tokenContext from '../../shared/context/tokenContext';
import { getFromServer } from '../js';

export default function useAvatarLink(post = useContext(postContext)): string {
    const [avatarSrcLink, setAvatarSrcLink] = useState('');

    const token = useContext(tokenContext);

    useEffect(() => {
        if (!token || !post.author) return;

        const getAvatarLink = async () => {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const { data } = await axios.get(
                `https://oauth.reddit.com/user/${post.author}/about`,
                {
                    headers: { Authorization: `bearer ${token}` },
                },
            );

            setAvatarSrcLink(data.data.icon_img);
        };

        getFromServer(getAvatarLink);
    }, [token, post]);

    return avatarSrcLink;
}
