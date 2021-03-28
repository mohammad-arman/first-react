
import './App.css';
import Header from './components/pages/Header';
import About from './components/pages/About';
import Info from './components/pages/Info';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <div className="App">
      <Header/>
      <About/>
      <Info/>
      </div>
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>
    
    </>
  
  );
}

export default App;
