import logo from './logo.svg';
import './App.css';
import Home from '../pages/Home';
import Notefound from '../pages/Notefound';
import Login from '../pages/Login';
import { Route,Routes } from 'react-router-dom';

function App() {
       
  let isLoggedin=false

  return (
    <><div className="App">
            <Routes>
             <Route path='/Home' element={isLoggedin?<Home></Home>:<Navigate to='/Signin'></Navigate>}></Route> 
             <Route path='/404' element={<Notefound></Notefound>}></Route>

            </Routes>
      </div>
    </>
  );
}

export default App;
