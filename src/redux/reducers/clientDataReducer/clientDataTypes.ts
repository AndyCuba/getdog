import {
    SET_PHONE_NUMBER,
    ADD_PHONE_NUMBER,
    DELETE_LAST_PHONE_NUMBER,
    SET_TERMS,
    SEND_DATA,
    RESET_STATE,
} from './clientDataReducer';

// Action types
type SetPhoneNumberActionType = {
    type: typeof SET_PHONE_NUMBER,
    payload: string
};

type AddPhoneNumberActionType = {
    type: typeof ADD_PHONE_NUMBER,
    payload: string
};

type DeleteLastNumberActionType = {
    type: typeof DELETE_LAST_PHONE_NUMBER
};

type SetTermsActionType = {
    type: typeof SET_TERMS
};

type SendDataActionType = {
    type: typeof SEND_DATA
};

type ResetStateActionType = {
    type: typeof RESET_STATE
};


//Allowed action types
type ClientDataActionsTypes = SetPhoneNumberActionType | AddPhoneNumberActionType |
    DeleteLastNumberActionType | SetTermsActionType |  SendDataActionType | ResetStateActionType;

//Initial state type
type InitialClientDataStateType = {
    phoneNumber: string,
    terms: boolean,
    isDataSent: boolean
};

export type {
    SetPhoneNumberActionType,
    AddPhoneNumberActionType,
    DeleteLastNumberActionType,
    SetTermsActionType,
    SendDataActionType,
    ResetStateActionType,
    ClientDataActionsTypes,
    InitialClientDataStateType
};