import { createContext, useState, useEffect, useContext } from "react";

const AuthContext  = createContext();

const useAuth = () => useContext(AuthContext); //passing the AuthContext to useAuth so we can import in the components and use it
//btw its a way to create custom hooks, typing the "use" in front of the hook name

const Provider = ({ children }) => {

  const [user, setUser] = useState('');
  const [isAuth, setIsAuth] = useState(false); //check if the user is logged in

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

  const AuthContextValues = {
    user, login, logout, isAuth
  }

return (
  <AuthContext.Provider value={AuthContextValues}>
    {children}
  </AuthContext.Provider>
)
}

export default Provider;
//export { AuthContext }; //previous usage before useAuth()
export { useAuth };