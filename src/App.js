import './App.css';
import Companies from './Components/Companies';
import Information from './Components/Information';
import Introduction from './Components/Introduction';
import Middlepart from './Components/Middlepart';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <Companies/>
      <Information/>
      <Middlepart/>
    </div>
  );
}

export default App;
