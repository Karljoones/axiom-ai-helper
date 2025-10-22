import { checkRequirements, domain, endpoints } from '../utils';

export const remainingRuntime = async (key) => {
    try {
        checkRequirements(key);
    } catch (e) {
        throw new Error(`Error fetching remaining runtime: ${e.message}`);
    }

    try {
        const result = await fetch(`${domain}${endpoints.remainingRuntime}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "key": key
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                return responseData;
            });

        return {
            'status': result.status,
            'data': result.data ? result.data : null,
        }
    } catch (e) {
        throw new Error(`Error fetching remaining runtime: ${e.message}`);
    }
}