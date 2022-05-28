import types from './types';

export const setSearch = (search) => dispatch => {
   
    return dispatch({
        type: types.SET_SEARCH,
        search
    });
}