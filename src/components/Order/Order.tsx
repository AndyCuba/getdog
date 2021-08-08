import { useHistory } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { 
    addPhoneNumber, 
    deleteLastPhoneNumber, 
    sendData, 
    setPhoneNumber, 
    setTerms 
} from '../../redux/reducers/clientDataReducer/clientDataReducer';

import { 
    termsSelector, 
    phoneNumberSelector, 
    isDataSentSelector 
} from '../../redux/reducers/clientDataReducer/clientDataSelectors';

import { 
    OrderWrapper,
    QRCode, 
    OrderExitButton, 
    OrderForm, 
    OrderFrame, 
    PhoneInput, 
    Keyboard,
    SubmitButton,
    TermsCheckbox
} from './style';


const Order = () => {
    const history = useHistory();
    const dispatch = useAppDispatch();
    const isTermsAccepted = useAppSelector(termsSelector);
    const phoneNumber = useAppSelector(phoneNumberSelector);
    const isDataSent = useAppSelector(isDataSentSelector);
    const lastPhoneNumber = phoneNumber.length - 1;

    //Returns to home page
    const handleExitClick = () => {
        history.push('/');
    };

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        if(!isNaN(Number(phoneNumber[lastPhoneNumber])) && isTermsAccepted) {
            dispatch(sendData());
        };
    };

    //Set input value to store
    const handleInputChange = (e: React.FormEvent<EventTarget>) => {
        const target = e.target as HTMLInputElement;
        if(target.value) {
            dispatch(setPhoneNumber(target.value));
        };
    };

    //If last number of phone number is Number and terms are accepted makes button active
    const handleAcceptButton = () => {
        return(!isNaN(Number(phoneNumber[lastPhoneNumber])) && isTermsAccepted);
    };

    //Turns on/off terms checkbox
    const handleTermsClick = () => {
        dispatch(setTerms());
    };

    //Adds (or deletes) numbers to input
    const handleKeyboardClick = (e: React.FormEvent<EventTarget>) => {
        const target = e.target as HTMLButtonElement;
        if(target.id === 'delete') {
            dispatch(deleteLastPhoneNumber());
        } else {
            if(phoneNumber.length < 12) {
                dispatch(addPhoneNumber(target.id))
            };
        };
    };

    if(isDataSent) {
        return(
            <OrderWrapper>
                <OrderFrame>
                    <h1>Заявка принята</h1>
                    <p>Держите телефон под рукой.</p>
                    <p>Скоро с Вами свяжется наш менеджер.</p> 
                </OrderFrame>
                <OrderExitButton onClick={handleExitClick} disabled={isDataSent}/>
                <QRCode />
            </OrderWrapper>
        );
    } else {
        return(
            <OrderWrapper>
                <OrderFrame>
                    <h2>Введите ваш номер мобильного телефона</h2>
                    <OrderForm onSubmit={handleSubmit}>
                        <PhoneInput 
                            mask="+7(999)999-99-99" 
                            placeholder="+7(___)___-__-__" 
                            onChange={handleInputChange}
                            value={phoneNumber}
                        />
                        <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                        <Keyboard onClick={handleKeyboardClick}>
                            <button id="1" type="button">1</button>
                            <button id="2" type="button">2</button>
                            <button id="3" type="button">3</button>
                            <button id="4" type="button">4</button>
                            <button id="5" type="button">5</button>
                            <button id="6" type="button">6</button>
                            <button id="7" type="button">7</button>
                            <button id="8" type="button">8</button>
                            <button id="9" type="button">9</button>
                            <button id="delete" type="button">Стереть</button>
                            <button id="0" type="button">0</button>
                        </Keyboard>
                        <TermsCheckbox>
                            <input 
                                type="checkbox" 
                                id="terms" 
                                defaultChecked={isTermsAccepted} 
                                onClick={handleTermsClick}
                            />
                            <label htmlFor="terms">Согласие на обработку персональных данных</label>
                        </TermsCheckbox>
                        <SubmitButton type="submit" disabled={!handleAcceptButton()}>
                            Подтвердить номер
                        </SubmitButton>
                    </OrderForm>
                </OrderFrame>
                <OrderExitButton onClick={handleExitClick} disabled={isDataSent}/>
                <QRCode />
            </OrderWrapper>
        );
    };
};

export default Order;