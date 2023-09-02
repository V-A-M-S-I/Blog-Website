import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Sign from './pages/signup';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/signup' Component={Sign}/>
          <Route path='/login' Component={Login}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
