export const domain = "https://lar.axiom.ai/api/v3"

export const endpoints = {
    trigger: "/trigger",
    status: "/run-data",
    runData: "/run-data",
    remainingRuntime: "/remaining-runtime",
    listAutomations: "/list-automations",
    runReports: "/run-reports",
    stop: "/stop",
}

export const checkRequirements = (key, name, data, nameRequired = false) => {
    if (!key) throw new Error('API Key is required, provide key as a parameter');
    if (nameRequired && !name) throw new Error('Automation name is required');

    if (data && !Array.isArray(data)) throw new Error('Data must be an array of arrays, i.e. [["test", "test"]]');
    if (data) {
        data.forEach((d) => {
            if (!Array.isArray(d)) throw new Error('Contents of data must be an array, i.e. [["test", "test"]]');
        });
    }
}