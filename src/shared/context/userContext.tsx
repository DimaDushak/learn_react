import React, { createContext, ReactNode } from 'react';
import { useUserData } from '../../utils/hooks';

interface UserContextData {
    avatarSrc?: string;
    userName?: string;
}

export const userContext = createContext<UserContextData>({});

interface Props {
    children: ReactNode;
}

export default function UserDataProvider({ children }: Props): JSX.Element {
    const userData = useUserData();

    return (
        <userContext.Provider value={userData}>{children}</userContext.Provider>
    );
}
