import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import tokenContext from '../../shared/context/tokenContext';
import { getFromServer } from '../js';

interface PostData {
    data: {
        author: string;
        created_utc: number;
        id: string;
        preview?: {
            images: [
                {
                    source: {
                        url: string;
                    };
                },
            ];
        };
        title: string;
        url: string;
    };
}

export default function usePostsData(): PostData[] {
    const [postsData, setPostsData] = useState([]);

    const token = useContext(tokenContext);

    useEffect(() => {
        if (!token) return;

        const getPostsData = async () => {
            const { data } = await axios.get('https://oauth.reddit.com/best', {
                headers: { Authorization: `bearer ${token}` },
            });

            setPostsData(data.data.children);
        };

        getFromServer(getPostsData);
    }, [token]);

    return postsData;
}
