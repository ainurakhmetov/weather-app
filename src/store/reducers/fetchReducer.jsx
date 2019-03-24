const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
const GET_DATA_FAIL = 'GET_DATA_FAIL';

const initialState = {
    data: [],
    error: false,
};

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                error: action.payload.error,
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                error: action.payload.error,
            };
        case GET_DATA_FAIL:
            return {
                ...state,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default fetchReducer;
