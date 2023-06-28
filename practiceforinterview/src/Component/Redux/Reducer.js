import { GETPOST_SUCCESS, GETREQUEST, GETREQUEST_FAILURE, GETREQUEST_SUCCESS } from "./ActionType"


export const reducer = (state,{type,payload}) => {
    switch (type) {
        case GETREQUEST:
            return { ...state, isLoading: true };
        case GETREQUEST_SUCCESS:
            return { ...state, isLoading: false, product: payload };
        case GETPOST_SUCCESS:
            return { ...state, isLoading: false, product: [...state.product,payload] };
        case GETREQUEST_FAILURE:
            return { ...state, isLoading: false, isError: true };
        default:
            return state;
    }
}