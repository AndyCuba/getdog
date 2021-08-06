import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import { GlobalStyle } from './style';


function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/order' component={Order} />
      </Switch>
    </div>
  );
}

export default App;
