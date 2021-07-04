/* eslint-disable no-console */
export default function checkDataFromServer(fn: () => Promise<void>): void {
    try {
        fn();
    } catch (e) {
        console.error(e);
    }
}
