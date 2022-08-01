import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import { Route, Routes } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import OptionContext from './context/OptionContext';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';

function App() {

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

  const [template, setTemplate] = useState(
    {
      color: 'white',
      background: 'blue'
    }
  ); //default template


  const changeTemplate = value => {
    setTemplate(templates[value]); //setting the template to the value of the select, careful about the square brackets []
    //console.log(templates[value].background);
    localStorage.setItem("template", templates[value].background); //setting the template to localStorage
  }

  useEffect(() => { //handling the template's background color from localStorage
    if(localStorage.getItem("template")) {
      setTemplate(templates[localStorage.getItem("template")]);
    } else if(!localStorage.getItem("template")) {
      setTemplate(templates.blue);
    }
  }, []);

  const OptionContextValues = {
    color: 'red',
    size: 32,
    template,
    changeTemplate
  }


  //setting the statements to elements in the DOM below!!! Just like, user={user} (old version)

  //Via <AuthContext.Provider> we wrap up the whole app and pass the values to it we wanna use anywhere.
  //I send the values inside the AuthContextValues object above. (btw if the key and value are the same name, we can just write the key like user, login etc...)
  // Another info: OptionContext can use the values of AuthContext but AuthContext can NOT use the values of OptionContext because AuthContext is outside of OptionContext.

  // UPDATE WITH ContextAPI structure;
  // Using the <AuthContext to wrap up the app and import it on this file with the same name above.
  return (
   <>
   <AuthContext>
   <OptionContext.Provider value={OptionContextValues}>
        <Layout>
          <Routes>
            
              <Route exact path='/' element={<Home/> }></Route>
              <Route exact path='/list' element={<List/> }></Route>
            
          </Routes>
        </Layout>
      </OptionContext.Provider>
    </AuthContext>
   </>
  );
}

export default App;