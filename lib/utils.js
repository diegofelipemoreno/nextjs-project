export async function requestUtil(url) {
    try {
        const configRequest = {
        cache: 'default',
        headers: {
            "Content-Type": "application/json",
        },
        method: 'GET',
        };
        const requestData = new Request(url, configRequest);

        return fetch(requestData).then((response) => {
            if (response.status === 200) {
                return {
                    statusCode: response.status,
                    body: response.json()
                }; 
            } 

            if (response.status >= 400) {
                return {
                    statusCode: response.status,
                    body: {message: REQUEST_MESSAGE.END_POINT}
                };
            }

            if (response.status >= 500) {
                return {
                    statusCode: response.status,
                    body: {message: REQUEST_MESSAGE.SERVER_ERROR}
                };
            }
        }).catch((error) => {
            console.error(error);
    
            const {response} = error;

            if (!response) {
            return {statusCode: STATUS_CODE.ERROR, body: {error}};
            }

            return {statusCode: response.status, body: {error}};
        });
    } catch (error) {
        console.error(error);

        const {response} = error;

        return {statusCode: response.status, body: {error}};
    }
}

/**
 * Constants.
 * @enum {string|number}
 */
 const REQUEST_MESSAGE = {
    SERVER_ERROR: 'Server Error',
    FAIL_ERROR: 'Error 404',
    END_POINT: 'Endpoint error'
};

const STATUS_CODE = {
    ERROR: 500
};