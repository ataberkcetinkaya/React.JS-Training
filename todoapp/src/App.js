import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
   <>
    <Header />

    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/list' element={<List/>}></Route>
    </Routes>
   </>
  );
}

export default App;