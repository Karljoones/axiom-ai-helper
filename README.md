## Axiom.ai Helper

Designed to be used with the Axiom.ai API, this helper is a simple way to interact with the API without having to manually write the functions. See Axiom.ai's [API Documentation](https://axiom.ai/docs/developers/) for more details on using the API.

## Installation

To install the library, you can use the following command:

```bash
npm install axiom-ai-helper
```

## Setup

It's recommended that you insert your API key into a `.env` file, you can then pass this value into the library for use with your automations.

## Usage

To use the library to trigger an automation, you can use the following code:

```js
import { trigger } from 'axiom-ai-helper';

const result = await trigger("Your automation name", "KEY", [["Data", "Data"]]);
console.log(result);
```

Successful triggers will return a JSON object with the following structure:

```json
{
  "status": "success",
  "link": "https://vnc.axiom.ai/vnc_lite.html....", // The link to view the running automation
  "message": "Automation triggered successfully"
}
```

*Note, the link to view the running automation will always be returned from the API. Be aware that tech savvy users may be able to access this. They will not be able to interact with the automation, but can view it run - ensure that it does not display any sensitive data.*

To use the library to check the status of a running automation, you can use the following code:

```js
import { checkStatus } from 'axiom-ai-helper';

const status = await checkStatus("Your automation name", "KEY");
console.log(status);
```

You'll get the following result:

```json
{
  "status": "running",
  "data": [[][]]
}
```

> Check the Axiom.ai [API response documentation](https://axiom.ai/docs/developers/api/responses#understanding-the-api-response) for more details on the response data.