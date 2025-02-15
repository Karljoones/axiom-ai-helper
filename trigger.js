import { checkRequirements, triggerEndpoint } from './utils';

export const trigger = async (name, data, key = process.env.REACT_APP_AXIOM_AI_API_KEY) => {

    try {
        checkRequirements(key, name, data);
    } catch (error) {
        throw new Error(`Error triggering automation: ${error}`);
    }

    try {
        const result = await fetch(triggerEndpoint, {
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
        throw new Error(`Error triggering automation: ${e}`);
    }
}

export default trigger;