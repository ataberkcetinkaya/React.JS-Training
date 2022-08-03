import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import { Route, Routes } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import OptionContext from './context/OptionContext';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';

function App() {

    


  //setting the statements to elements in the DOM below!!! Just like, user={user} (old version)

  //Via <AuthContext.Provider> we wrap up the whole app and pass the values to it we wanna use anywhere.
  //I send the values inside the AuthContextValues object above. (btw if the key and value are the same name, we can just write the key like user, login etc...)
  // Another info: OptionContext can use the values of AuthContext but AuthContext can NOT use the values of OptionContext because AuthContext is outside of OptionContext.

  // UPDATE WITH ContextAPI structure;
  // Using the <AuthContext to wrap up the app and import it on this file with the same name above.
  return (
   <>
   <AuthContext>
      <OptionContext>
          <Layout>
            <Routes>
              
                <Route exact path='/' element={<Home/> }></Route>
                <Route exact path='/list' element={<List/> }></Route>
              
            </Routes>
          </Layout>
        </OptionContext>
    </AuthContext>
   </>
  );
}

export default App;