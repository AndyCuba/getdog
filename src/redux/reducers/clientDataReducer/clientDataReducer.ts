import { 
    ClientDataActionsTypes,
    DeleteLastNumberActionType,
    InitialClientDataStateType,
    ResetStateActionType, 
    SetPhoneNumberActionType, 
    SetTermsActionType 
} from './clientDataTypes';

//Actions
const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
const DELETE_LAST_PHONE_NUMBER = 'DELETE_LAST_PHONE_NUMBER';
const SET_TERMS = 'SET_TERMS';
const RESET_STATE = 'RESET_STATE';

//Action creators
const setPhoneNumber = (phoneNumber: string): SetPhoneNumberActionType => ({
    type: SET_PHONE_NUMBER,
    payload: phoneNumber
});

const deleteLastPhoneNumber = (): DeleteLastNumberActionType => ({
    type: DELETE_LAST_PHONE_NUMBER
});

const setTerms = (): SetTermsActionType => ({
    type: SET_TERMS
});

const resetState = (): ResetStateActionType => ({
    type: RESET_STATE
});

//Initial state
const initialClientDataState: InitialClientDataStateType = {
    phoneNumber: '',
    terms: false
};

//Reducer
const clientDataReducer = (state = initialClientDataState, action: ClientDataActionsTypes) => {
    switch (action.type) {
        case SET_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: state.phoneNumber.concat(action.payload)
            };
        case DELETE_LAST_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: state.phoneNumber.substring(0, state.phoneNumber.length - 1)
            };
        case SET_TERMS:
            return {
                ...state,
                terms: !state.terms
            };
        case RESET_STATE:
            return initialClientDataState;
        default:
            return { ...state };
    };
};

export {
    SET_PHONE_NUMBER,
    DELETE_LAST_PHONE_NUMBER,
    SET_TERMS,
    RESET_STATE,
    setPhoneNumber,
    deleteLastPhoneNumber,
    setTerms,
    resetState,
    clientDataReducer
};