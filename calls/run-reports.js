import { checkRequirements, domain, endpoints } from '../utils';

export const runReports = async (key, count) => {
    try {
        checkRequirements(key, null, null, false);
    } catch (e) {
        throw new Error(`Error fetching run reports: ${e.message}`);
    }

    try {
        const result = await fetch(`${domain}${endpoints.runReports}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(count ? {
                "key": key,
                "count": count
            } : {
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
        throw new Error(`Error fetching run reports: ${e.message}`);
    }
}

export default runReports;