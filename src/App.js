import './App.css';
import { Outlet } from 'react-router-dom';
import Navigator from './components/Navigator';
import { About } from './routes/About';
import Charts from './routes/Charts';
import Github from './components/Github';

function App() {
  return (
    <div className="App">
      <Navigator />
      <Charts />
      <Github />
      <About />
    </div>
  );
}

export default App;
