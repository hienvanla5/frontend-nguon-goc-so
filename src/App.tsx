import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from '../pages/Login';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import AppLayout from './components/layout/AppLayout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  )
};

export default App;