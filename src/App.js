import './App.css';
import Header from './layouts/Header';
import Employees from './pages/Employees';
import Employers from './pages/Employers';
import Jobboard from './pages/Jobboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Jobboard/>
      <Employees/>
      <Employers/>
    </div>
  );
}

export default App;
