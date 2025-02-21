import { checkRequirements, statusEndpoint } from './utils';

export const checkStatus = async (name, key = process.env.REACT_APP_AXIOM_AI_API_KEY) => {
    try {
        checkRequirements(key, name);
    } catch (e) {
        throw new Error(`Error checking status: ${e.message}`);
    }

    try {
        const result = await fetch(statusEndpoint, {
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