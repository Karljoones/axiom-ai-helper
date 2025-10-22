import { checkRequirements, domain, endpoints } from '../utils';

export const checkStatus = async (name, key) => {
    try {
        checkRequirements(key, name, null, true);
    } catch (e) {
        throw new Error(`Error checking status: ${e.message}`);
    }

    try {
        const result = await fetch(`${domain}${endpoints.status}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "key": key,
                "name": name
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                return responseData;
            });

        return {
            'status': result.status,
            'message': result.message ? result.message : null,
            'data': result.data ? result.data : null,
        }
    } catch (e) {
        throw new Error(`Error checking status: ${e.message}`);
    }
}

export default checkStatus;