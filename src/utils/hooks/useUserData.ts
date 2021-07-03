import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import tokenContext from '../../shared/context/tokenContext';
import { getFromServer } from '../js';

interface UserData {
    avatarSrc?: string;
    userName?: string;
}

export default function useUserData(): UserData {
    const [userData, setUserData] = useState<UserData>({});

    const token = useContext(tokenContext);

    useEffect(() => {
        if (!token) return;

        const getUserData = async () => {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const { name, icon_img } = (
                await axios.get('https://oauth.reddit.com/api/v1/me', {
                    headers: { Authorization: `bearer ${token}` },
                })
            ).data;

            setUserData({ userName: name, avatarSrc: icon_img });
        };

        getFromServer(getUserData);
    }, [token]);

    return userData;
}
