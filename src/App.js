import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './ui/AppLayout';
import { Users } from './pages/Users';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <AppLayout>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </AppLayout>
    </BrowserRouter>
  );
}

export default App;
