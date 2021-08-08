import { 
    ClientDataActionsTypes,
    SetPhoneNumberActionType,
    AddPhoneNumberActionType,
    DeleteLastNumberActionType,
    SetTermsActionType, 
    InitialClientDataStateType,
    ResetStateActionType,
    SendDataActionType
} from './clientDataTypes';

//Actions
const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
const ADD_PHONE_NUMBER = 'ADD_PHONE_NUMBER';
const DELETE_LAST_PHONE_NUMBER = 'DELETE_LAST_PHONE_NUMBER';
const SET_TERMS = 'SET_TERMS';
const SEND_DATA = 'SEND_DATA';
const RESET_STATE = 'RESET_STATE';

//Action creators
const setPhoneNumber = (phoneNumber: string): SetPhoneNumberActionType => ({
    type: SET_PHONE_NUMBER,
    payload: phoneNumber
});

const addPhoneNumber = (phoneNumber: string): AddPhoneNumberActionType => ({
    type: ADD_PHONE_NUMBER,
    payload: phoneNumber
});

const deleteLastPhoneNumber = (): DeleteLastNumberActionType => ({
    type: DELETE_LAST_PHONE_NUMBER
});

const setTerms = (): SetTermsActionType => ({
    type: SET_TERMS
});

const sendData = (): SendDataActionType => ({
    type: SEND_DATA
});

const resetState = (): ResetStateActionType => ({
    type: RESET_STATE
});

//Initial state
const initialClientDataState: InitialClientDataStateType = {
    phoneNumber: '+7',
    terms: false,
    isDataSent: false
};

//Reducer
const clientDataReducer = (state = initialClientDataState, action: ClientDataActionsTypes) => {
    switch (action.type) {
        case SET_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: action.payload
            };
        case ADD_PHONE_NUMBER:
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
        case SEND_DATA:
            return {
                ...state,
                isDataSent: true
            };
        case RESET_STATE:
            return initialClientDataState;
        default:
            return { ...state };
    };
};

export {
    SET_PHONE_NUMBER,
    ADD_PHONE_NUMBER,
    DELETE_LAST_PHONE_NUMBER,
    SET_TERMS,
    SEND_DATA,
    RESET_STATE,
    setPhoneNumber,
    addPhoneNumber,
    deleteLastPhoneNumber,
    setTerms,
    sendData,
    resetState,
    clientDataReducer
};