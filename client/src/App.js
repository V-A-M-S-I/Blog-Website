import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Sign from './pages/signup';
import Home from './pages/home';
import Main from  './pages/main';
import Error from  './pages/error';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Main}/>
          <Route path='/home' Component={Home}/>
          <Route path='/signup' Component={Sign}/>
          <Route path='/login' Component={Login}/>
          <Route path='/*' Component={Error}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
