import {
    SET_PHONE_NUMBER,
    DELETE_LAST_PHONE_NUMBER,
    SET_TERMS,
    RESET_STATE,
} from './clientDataReducer';

// Action types
type SetPhoneNumberActionType = {
    type: typeof SET_PHONE_NUMBER,
    payload: string
};

type DeleteLastNumberActionType = {
    type: typeof DELETE_LAST_PHONE_NUMBER
};

type SetTermsActionType = {
    type: typeof SET_TERMS
};

type ResetStateActionType = {
    type: typeof RESET_STATE
};


//Allowed action types
type ClientDataActionsTypes = SetPhoneNumberActionType | DeleteLastNumberActionType |
    SetTermsActionType | ResetStateActionType;

//Initial state type
type InitialClientDataStateType = {
    phoneNumber: string,
    terms: boolean
};

export type {
    SetPhoneNumberActionType,
    DeleteLastNumberActionType,
    SetTermsActionType,
    ResetStateActionType,
    ClientDataActionsTypes,
    InitialClientDataStateType
};