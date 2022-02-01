import './App.css';
import MiniDrawer from './components/appbar';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <MiniDrawer/>
      <Dashboard/>
    </div>
  );
}

export default App;
