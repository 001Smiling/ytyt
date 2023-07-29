import './App.css';
import './components/Assets/Styles/base.scss'
import MainPage from './components/MainPage/MainPage';
import UserPage from './components/UserPage/UserPage';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
      <Route extra path='/user' element={<UserPage />} />
      <Route extra path='/' element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
