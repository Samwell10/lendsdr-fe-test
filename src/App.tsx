import {Routes, Route} from 'react-router-dom';
import './App.scss';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import User from './Pages/User/User';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Login/>}></Route>
        <Route  path='/Dashboard' element={<Dashboard/>}></Route>
        <Route  path='/user/:id' element={<User/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
