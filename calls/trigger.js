import { checkRequirements, domain, endpoints } from '../utils';

export const trigger = async (name, key, data) => {
    try {
        checkRequirements(key, name, data, true);
    } catch (e) {
        throw new Error(`Error triggering automation: ${e.message}`);
    }

    try {
        const result = await fetch(`${domain}${endpoints.trigger}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "key": key,
                "name": name,
                "data": data
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                return responseData;
            });

        return {
            status: result["OPEN LINK IN BROWSER"] ? "success" : "error",
            link: result["OPEN LINK IN BROWSER"] ? result["OPEN LINK IN BROWSER"] : null,
            message: result.message ? result.message : "Automation successfully triggered"
        }
    } catch (e) {
        throw new Error(`Error triggering automation: ${e.message}`);
    }
}

export default trigger;