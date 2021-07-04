/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';

export default function useToken(): string {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (window.__token__) {
            setToken(window.__token__);
        }
    }, []);

    return token;
}
