import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import Footer from './components/Footer';
import AuthContext from './context/AuthContext';
import OptionContext from './context/OptionContext';

const templates = {
    yellow: {
      color: 'black',
      background: 'yellow'
    },
    blue: {
      color: 'white',
      background: 'blue'
    },
    red: {
      color: 'white',
      background: 'red'
    }
}

function App() {
  
  const [user, setUser] = useState('');
  const [isAuth, setIsAuth] = useState(false); //check if the user is logged in

  const [template, setTemplate] = useState(
    {
      color: 'white',
      background: 'blue'
    }
  ); //default template

  const logout = (data) => {
    setUser(''); //clear the user info
    setIsAuth(false);
    localStorage.removeItem("user", data); //remove the user info from localStorage so that the user can't access the app
  }

  const login = data => { //getting the data for the user's name
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

  const AuthContextValues = {
    user, login, logout
  }

  const changeTemplate = value => {
    setTemplate(templates[value]); //setting the template to the value of the select, careful about the square brackets []
  }

  const OptionContextValues = {
    color: 'red',
    size: 32,
    template,
    changeTemplate
  }

  //Via <AuthContext.Provider> we wrap up the whole app and pass the values to it we wanna use anywhere.
  //I send the values inside the AuthContextValues object above. (btw if the key and value are the same name, we can just write the key like user, login etc...)
  // Another info: OptionContext can use the values of AuthContext but AuthContext can NOT use the values of OptionContext because AuthContext is outside of OptionContext.
  return (
   <>
   <AuthContext.Provider value={AuthContextValues}>
    <OptionContext.Provider value={OptionContextValues}>
        {
          isAuth &&
          <Header />
        }
        <Routes>
          {
            isAuth ? 
            <>
            <Route exact path='/' element={<Home user={user}/>}></Route>
            <Route exact path='/list' element={<List />}></Route>
            </>
            :
            <Route exact path='/' element={<Login login={login}/>}></Route>
          }
        </Routes>

        {
          isAuth &&
          <Footer />
        }
      </OptionContext.Provider>
    </AuthContext.Provider>
   </>
  );
}

export default App;