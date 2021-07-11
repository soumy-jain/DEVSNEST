import './App.css';
import Data from "./Data"

function App() {
  return (
    <div className="App">
      <div>
        <h2>Scroll down to view more!</h2>
        <Data text='Apple' cal='20'/>
        <Data text='Orange' cal='30'/>
        <Data text='Banana' cal='25'/>
        <Data text='Pineapple' cal='25.5'/>
        <Data text='Watermelon' cal='15'/>
      </div>
    </div>
  );
}

export default App;
