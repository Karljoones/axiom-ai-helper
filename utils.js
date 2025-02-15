export const triggerEndpoint = "https://lar.axiom.ai/api/v3/trigger";
export const statusEndpoint = "https://lar.axiom.ai/api/v3/run-data";

export const checkRequirements = (key, name, data) => {
    if (!key) throw new Error('API Key is required, provide key as a parameter or set REACT_APP_AXIOM_AI_API_KEY in .env');
    if (!name) throw new Error('Automation name is required');

    if (data && !Array.isArray(data)) throw new Error('Data must be an array of arrays, i.e. [["test", "test"]]');
    if (data) {
        data.forEach((d) => {
            if (!Array.isArray(d)) throw new Error('Contents of data must be an array, i.e. [["test", "test"]]');
        });
    }
}