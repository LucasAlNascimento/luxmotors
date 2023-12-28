import UserActionTypes from "./action-types";

type UserState = {
    currentUser: {
        name: string;
        email: string;
    } | null;
};

type UserAction = {
    type: 'user/login';
    payload: {
        name: string;
        email: string;
    } | null;
};

const initialState: UserState = {
    currentUser: null,
};

const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch (action.type) {

        case UserActionTypes.LOGIN:
            return { ...state, currentUser: action.payload };

        case UserActionTypes.LOGOUT:
            return { ...state, currentUser: null };
            
        default:
            return state;
    }
};


export default userReducer;
