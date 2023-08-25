import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import ForgetPassword from './Component/ForgetPassword';
import Home from './Component/Home';
import Verify from './Component/Verify';

function App() {
  
  return (
    <div className="App">
    <Routes>
    <Route exact path="/" element={<SignUp/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/forget" element={<ForgetPassword/>}></Route>
    <Route path="/verify" element={<Verify/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
  