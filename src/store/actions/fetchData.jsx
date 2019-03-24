import axios from 'axios';

const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
const GET_DATA_FAIL = 'GET_DATA_FAIL';

const fetchData = () => dispatch => {
    dispatch({
        type: GET_DATA_REQUEST,
        payload: { error: false },
    });
    axios
        .get('https://gist.githubusercontent.com/anonymous/feb1b31516f3e36a14b29657701f18d2/raw/')
        .then(response => {
            dispatch({
                type: GET_DATA_SUCCESS,
                payload: {
                    data: response.data,
                    error: false,
                },
            });
        })
        .catch(() =>
            dispatch({
                type: GET_DATA_FAIL,
                payload: { error: true },
            }),
        );
};

export default fetchData;



