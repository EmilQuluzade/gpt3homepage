import './App.css';
import Ads from './Components/Ads';
import Blogs from './Components/Blogs';
import Companies from './Components/Companies';
import Footer from './Components/Footer';
import Information from './Components/Information';
import Introduction from './Components/Introduction';
import Middlepart from './Components/Middlepart';
import Navbar from './Components/Navbar';
import Simplemiddle from './Components/Simplemiddle';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <Companies/>
      <Information/>
      <Middlepart/>
      <Simplemiddle/>
      <Ads/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
