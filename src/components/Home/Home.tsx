import { useHistory } from 'react-router-dom';
import { 
    HomeButton, 
    HomeFrame, 
    HomeWrapper 
} from './style';

const Home = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/order');
    };

    return(
        <HomeWrapper>
            <HomeFrame>
                <HomeButton onClick={handleClick}>ок</HomeButton>
            </HomeFrame>
        </HomeWrapper>
    );
};

export default Home;