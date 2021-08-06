import { useHistory } from 'react-router-dom';
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

    const handleExitClick = () => {
        history.push('/');
    };

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
    }

    return(
        <OrderWrapper>
            <OrderFrame>
                <h2>Введите ваш номер мобильного телефона</h2>
                <OrderForm onSubmit={handleSubmit}>
                    <PhoneInput mask="+7(999)999-99-99" placeholder="+7(___)___-__-__"/>
                    <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                    <Keyboard>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>СТЕРЕТЬ</button>
                        <button>0</button>
                    </Keyboard>
                    <TermsCheckbox >
                        <input type="checkbox" id="terms"/>
                        <label htmlFor="terms">Согласие на обработку персональных данных</label>
                    </TermsCheckbox>
                    <SubmitButton type="submit">ПОДТВЕРДИТЬ НОМЕР</SubmitButton>
                </OrderForm>
            </OrderFrame>
            <OrderExitButton onClick={handleExitClick}/>
            <QRCode />
        </OrderWrapper>
    );
};

export default Order;