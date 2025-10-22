import { checkRequirements, domain, endpoints } from "../utils";

export const runData = async (name, key) => {
    try {
        checkRequirements(key, name, null, true);
    } catch (e) {
        throw new Error(`Error fetching run data: ${e.message}`);
    }

    try {
        const result = await fetch(`${domain}${endpoints.runData}`, {
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
            'data': result.data ? result.data : null,
        }
    } catch (e) {
        throw new Error(`Error fetching run data: ${e.message}`);
    }
}