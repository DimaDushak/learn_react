/* eslint-disable no-console */
export default function getFromServer(fn: () => Promise<void>): void {
    try {
        fn();
    } catch (e) {
        console.error(e);
    }
}
