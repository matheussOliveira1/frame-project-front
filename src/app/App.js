import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthPage';
import BoardPage from '../pages/Boards/BoardPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<AuthPage />} />
          <Route path='/boards' element={<BoardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
