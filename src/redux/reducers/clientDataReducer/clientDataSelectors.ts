import { AppStateType } from '../../store';

const termsSelector = (state: AppStateType) => state.clientData.terms;
const phoneNumberSelector = (state: AppStateType) => state.clientData.phoneNumber;
const isDataSentSelector = (state: AppStateType) => state.clientData.isDataSent;

export {
    termsSelector,
    phoneNumberSelector,
    isDataSentSelector
};