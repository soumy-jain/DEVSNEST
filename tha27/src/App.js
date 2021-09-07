import './App.css';
import{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearAll, removeItem } from './action';

function App() {

  const dispatch = useDispatch();
  const [item, setItem] = useState("");
  const items = useSelector((state) => state.main);
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={ (e) => {
        e.preventDefault();
        if(item.length !== 0) {
          dispatch(addItem(item));
        }
        setItem("");
      }}>
        <input type="text" onChange={(e) => {
          setItem(e.target.value);
        }} value={item} />
        <input type="submit" value="Add" />
      </form>
      <button onClick={() => {
        dispatch(clearAll()); 
      }}>Clear All</button>
      
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item} <button onClick={() => {
            dispatch(removeItem(index));
          }}> X </button></li>
        })}
      </ul>
    </div>
  );
}

export default App;