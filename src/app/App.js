import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthPage';
import BoardPage from '../pages/Boards/BoardPage';
import Perfil from '../pages/Perfil/Perfil';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<AuthPage />} />
          <Route path='/boards' element={<BoardPage />} />
          <Route path='/profile' element={<Perfil />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
