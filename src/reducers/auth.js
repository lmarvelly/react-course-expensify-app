/**
 * This reducer is for handling logging in and out
 * 
 * @argument action is what is getting dispatched
 */
export default (state = {}, action) =>
{
	switch (action.type)
	{
		case 'LOGIN':
			return {
				uid: action.uid
			};
		case 'LOGOUT':
			return {};
		default: 
			return state;
	}
};