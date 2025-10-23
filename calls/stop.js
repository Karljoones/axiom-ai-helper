import { checkRequirements, domain, endpoints } from '../utils';

export const stop = async (viewerUrl) => {
    if (!viewerUrl) {
        throw new Error('Viewer URL is required to stop an automation.');
    }

    const url = new URL(viewerUrl);
    const password = url.searchParams.get('password');

    const hostVal = url.searchParams.get('host');
    const hostParts = hostVal && hostVal.split('-');
    const pid = hostParts[1].substring(2, 4);

    try {
        const result = await fetch(`${domain}${endpoints.stop}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "pid": pid,
                "pw": password
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                return responseData;
            });

        return {
            'status': result.stopped ? "success" : "error",
        }
    } catch (e) {
        throw new Error(`Error stopping automation: ${e.message}`);
    }
}

export default stop;