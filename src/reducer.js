import types from './actions/types';

const initialState = {
	search: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.SET_SEARCH: {
			const { search } = action;
			return { 
				...state,
				search,
			};
		}
		
		default: {
			return state;
		}
	}
};
