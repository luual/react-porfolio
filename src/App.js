import './App.css';
import Navigator from './components/Navigator';
import { About } from './components/About';
import Github from './components/Github';
import { Home } from './components/Home';
import { Experiences } from './components/Experiences';

function App() {
  return (
    <div className="App">
      {/* <Navigator /> */}
      <Home />
      <Experiences />
      <Github />
      <About />
    </div>
  );
}

export default App;
