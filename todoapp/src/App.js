import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';

function App() {
  
  const [user, setUser] = useState('');
  const [isAuth, setIsAuth] = useState(false); //check if the user is logged in

  const logOut = () => {
    setUser(''); //clear the user info
    setIsAuth(false);
  }

  const logIn = data => { //getting the data for the user's name
    setUser(data);
    setIsAuth(true);
  }

  //setting the statements to elements in the DOM below!!! Just like, user={user}
  //isAuth ? means if the user is logged in show those pages if not show that page after ':'
  //isAuth && means if its true
  return (
   <>
    {
      isAuth &&
      <Header user={user} logOut={logOut}/>
    }
    <Routes>
      {
        isAuth ? 
        <>
        <Route exact path='/' element={<Home user={user}/>}></Route>
        <Route exact path='/list' element={<List user={user}/>}></Route>
        </>
        :
        <Route exact path='/' element={<Login login={logIn}/>}></Route>
      }
       
    </Routes>
   </>
  );
}

export default App;