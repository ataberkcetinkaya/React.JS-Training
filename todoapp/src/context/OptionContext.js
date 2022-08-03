import { createContext, useContext, useState, useEffect } from "react";

const OptionContext = createContext();

const useOption = () => useContext(OptionContext);

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

const Provider = ({ children }) => {

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

  return(
    <OptionContext.Provider value={OptionContextValues}>
      {children}
    </OptionContext.Provider>
  )
}

export default Provider;
export { useOption };