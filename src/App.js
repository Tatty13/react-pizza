import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/cart'
              element={<Cart />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
