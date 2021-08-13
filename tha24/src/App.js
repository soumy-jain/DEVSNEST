import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import {useState, createContext} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Login from './components/Login';
import Loggedin from './components/Loggedin';

const loginContext = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const auth={
    login: login,
    setLogin: () => {
      setLogin(!login)
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
      <loginContext.Provider value={auth}>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/loggedin' component={Loggedin}></Route>
        </Switch>
      </loginContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

export {loginContext};
