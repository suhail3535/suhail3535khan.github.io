
import { GETPOST_SUCCESS, GETREQUEST, GETREQUEST_FAILURE, GETREQUEST_SUCCESS } from "./ActionType"

export const getRequest=()=>{
    return {
    type:GETREQUEST
}
}
export const getRequestsuccess = (payload) => {
    return {
        type: GETREQUEST_SUCCESS, payload
    };
}

export const getpostuestsuccess = (payload) => {
    return {
        type: GETPOST_SUCCESS,payload
    };

};
export const getRequestfailure = () => {
    return {
        type: GETREQUEST_FAILURE,
    };
};

