import styled, { keyframes } from 'styled-components';
import InputMask from 'react-input-mask';
import orderBackground from '../../images/orderBackground.jpg';
import QRCodeBackground from '../../images/qrCode.svg';
import orderExitButton from '../../images/orderExitButton.png';
import disabledOrderExitButton from '../../images/disabledOrderExitButton.png';
import checboxIcon from '../../images/checkboxIcon.svg';

const translateIn = keyframes`
    from {
        display: none;
        transform: translate( -100%, 0);
    }
    to {
        display: block;
        transform: translate( 0%, 0);
    }
`;

const OrderWrapper = styled.div`
    position: relative;
    background: url(${orderBackground}) center/cover;
    width: 1280px;
    height: 720px;
`;

const OrderFrame = styled.div`
    width: 380px;
    height: 720px;
    background-color: #86D3F4;
    animation: 1s ${translateIn} linear;
    padding: 72px 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    h1 {
        padding: 193px 0 15px;
        text-align: center;
        font-weight: 700;
        font-size: 32px;
        line-height: 37px;
        text-transform: uppercase;
    }
    h1 + p, p + p {
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        max-width: 284px;
    }
    h2 {
        font-size: 26px;
        line-height: 30px;
        text-align: center;
        margin-bottom: 13px;
    }
`;

const OrderExitButton = styled.button`
    border: none;
    outline: none;
    background: url(${orderExitButton}) center/cover;
    width: 88px;
    height: 52px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    &:active {
        transform: scale(0.95);
    }
    &:disabled {
        background: url(${disabledOrderExitButton}) center/cover;
    }
`;

const QRCode = styled.div`
    background: url(${QRCodeBackground}) center/cover;
    width: 314px;
    height: 110px;
    position: absolute;
    right: 40px;
    bottom: 40px;
`;

const OrderForm = styled.form`
    text-align: center;
    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 13px;
    }
`;

const PhoneInput = styled(InputMask)`
    width: 260px;
    height: 38px;
    font-size: 32px;
    background-color: transparent;
    outline: none;
    border: none;
    font-weight: bold;
    line-height: 37px;
    margin-bottom: 13px;
`;

const Keyboard = styled.div`
    width: 284px;
    height: 278px;
    padding: 20px 0;
    display: grid;
    grid-template-columns: 88px 88px 88px;
    grid-template-rows: 52px 52px 52px;
    grid-gap: 10px;
    margin-bottom: 13px;
    button {
        cursor: pointer;
        width: 88px;
        height: 52px;
        border: 2px solid #000000;
        outline: none;
        background-color: transparent;
        font-weight: 500;
        font-size: 16px;
        transition: transform 0.1s ease-in-out; 
        &:hover {
            background-color: black;
            color: #86D3F4;
        }
        &:active {
            transform: scale(0.95);
        }
        &:nth-child(10) {
            grid-column-start: 1;
            grid-column-end: 3;
            width: 186px;
            font-weight: 500;
            font-size: 16px;
            text-transform: uppercase;
        }
    }
`;

const TermsCheckbox = styled.div`
    margin-bottom: 13px;
    height: 52px;
    display: flex;
    justify-content: start;
    align-items: center;
    input {
        display: none;
    }
    label {
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #565656;
        position: relative;
        width: 214px;
        padding-left: 70px;
    }       
    label::before {
        content: '';
        cursor: pointer;
        background-color: transparent;
        width: 40px;
        height: 40px;
        border: 2px solid black;
        display: inline-block;
        position: absolute;
        left: 10px;
        top: -6px;
    }
    input:checked+label::before {
        background: url(${checboxIcon}) no-repeat center/75%;
    }
`;

const SubmitButton = styled.button`
    background-color: black;
    outline: none;
    width: 284px;
    height: 52px;
    cursor: pointer;
    border: 1px solid black;
    color: white;
    font-weight: 500;
    font-size: 16px;
    transition: transform 0.1s ease-in-out;
    text-transform: uppercase;
    &:active {
        transform: scale(0.95);
    }
    &:disabled {
        background-color: transparent;
        color: #4E4E4E;
        border-color: #4E4E4E;
    }
`;

export { 
    OrderWrapper, 
    OrderFrame, 
    QRCode, 
    OrderExitButton,
    OrderForm,
    PhoneInput,
    Keyboard,
    TermsCheckbox,
    SubmitButton
};