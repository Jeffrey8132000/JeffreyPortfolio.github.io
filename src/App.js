import './App.css';
import Navbar from './Navbar';
import Bottom from './Bottom';
import Picturebg from './Picturebg';

function App() {
  return (
    <div className="App">
<Navbar/>

      <header id='home' className="App-header">
      <Picturebg/>
      </header>

      <div>
<Bottom/>
      </div>
      
    </div>  
  );
}

export default App;
