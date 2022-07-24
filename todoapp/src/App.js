import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  
  const [user, setUser] = useState('');
  const [isAuth, setIsAuth] = useState(false); //check if the user is logged in

  const logOut = (data) => {
    setUser(''); //clear the user info
    setIsAuth(false);
    localStorage.removeItem("user", data); //remove the user info from localStorage so that the user can't access the app
  }

  const logIn = data => { //getting the data for the user's name
    setUser(data);
    setIsAuth(true);
    localStorage.setItem("user", data); //Setting the user's name to localStorage. (updates for every new user)
  }

  useEffect(() => { //if user is logged in, he will have the access to the app till he clicks log out
    if(localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
      setIsAuth(true);
    } else if(!localStorage.getItem("user")) {
      setIsAuth(false);
    }
  }, []);

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

    {
      isAuth &&
      <Footer user={user} logOut={logOut}/>
    }
   </>
  );
}

export default App;