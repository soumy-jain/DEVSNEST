import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from './App'
import About from './components/About'
import Navv from './components/Navv'


const Routes = () => {
    return (
        <Router>
            <Navv/>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/about" component={About}></Route>
            </Switch>
        </Router>
    )
}
export default Routes;