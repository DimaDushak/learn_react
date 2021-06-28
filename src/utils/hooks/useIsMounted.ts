import React from 'react';

function useIsMounted(): boolean {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => setIsMounted(true), []);

    return isMounted;
}

export default useIsMounted;
