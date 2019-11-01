const getSuccessData = (response, type, successData) => ({ response, type, successData });

const getErrorData = (error, type, errorData) => ({ error, type, errorData });

export const makeServerCall = (
    helperMethod, requestData, initActionType, successActionType, errorActionType, successData = {}, errorData = {}) =>
    dispatch => helperMethod(requestData).then(response => {
        if (response.status >= 200 && response.status < 300) {
            dispatch(getSuccessData(response, successActionType, successData));
        } else {
            const error = new Error(response.statusText);
            error.response = response;
            dispatch(getErrorData(error, errorActionType, errorData));
        }
    }).catch(error => dispatch(getErrorData(error.response.data, errorActionType, errorData)));
