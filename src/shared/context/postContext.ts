import { createContext } from 'react';

interface PostContextData {
    author?: string;
    created_utc?: number;
    id?: string;
    preview?: {
        images: [
            {
                source: {
                    url: string;
                };
            },
        ];
    };
    title?: string;
    url?: string;
}

const postContext = createContext<PostContextData>({});

export default postContext;
