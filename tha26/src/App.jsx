import { useDispatch, useSelector } from 'react-redux';
import { changeEmail, changeName } from './actions';
import './App.css';


function App() {
  const userName = useSelector(state => state.nameChanger)
  const email = useSelector(state => state.emailChanger)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Input</h1>
      <input type="text" placeholder="Name" onChange= { (e) => {
        dispatch(changeName(e.target.value))
      }} />
      <input type="text" placeholder="Email" onChange = { (e) => {
        dispatch(changeEmail(e.target.value))
      }} />
      <h1>Data</h1>
      <h2>Name: {userName}</h2>
      <h2>Email: {email} </h2>
    </div>
  );
}

export default App;
