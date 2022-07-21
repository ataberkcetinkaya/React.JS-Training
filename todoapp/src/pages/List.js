import '../App.css';
import { useState, useEffect, useRef  } from 'react';
import AddTodos from '../components/AddTodos';
import Todos from '../components/Todos';

function List() {

  const inputRef = useRef(); // useRef() is a hook that returns a mutable ref object with a single mutable property 'current'
  const selectRef = useRef();

  const [inputData, setInputData] = useState('');
  const [selectData, setSelectData] = useState('');
  const [todos, setTodos] = useState([]); //todos list is gonna be an empty array at the beginning
  const [alert, setAlert] = useState({
    name: false,
    status: false
  });
  const [alertText, setAlertText] = useState(''); //state for the min 3 characters alert text inside <p>

  const addItems = () => {
    //FIRST STAGE - Adding the items without any alerts
    // setTodos(list => [ //list is an empty array at the beginning, REMEMBER!!!
    //   {
    //     name: inputData,
    //     status: selectData
    //   }, ...list //destructing the list array and given the names with name for inputData and status for selectData
    // ]);
    // setInputData('');  //clear the input field
    // setSelectData(''); //clear the select field

    //SECOND STAGE - Alerted Mode with CSS
    if(!inputData && !selectData) {
          setAlert({
            name: true,
            status: true
          })
        setInputData('');  //clear the input field
        setSelectData(''); //clear the select field
      } else if(!inputData) {
        setAlert({
          name: true,
          status: false
        })
      } else if(!selectData) {
        setAlert({
          name: false,
          status: true
        })
      } 

      //min value
      else if(inputData.length < 3) {
        setAlert({
          name: true
        })
        setAlertText('Must be at least 3 characters');
      }
      else if(inputData.length >= 3)
         { 
          setTodos(list => [
            {
              name: inputData,
              status: selectData
            },
            ...list
          ]);

          setInputData('');  //clear the input field
          setSelectData(''); //clear the select field
          setAlert(false); //back to default false statement
          setAlertText(''); //clear the alert text for min 3 characters
          }
        }
        

    const changeAlert = () => {
      setSelectData(selectRef.current.value) //remove the red background if the user adds the item
      setAlert(alert => ({ //only change the part when the user types or selects something on it
        ...alert,
        status:false
      }))
    }

    const changeAlertForInput = () => {
      setInputData(inputRef.current.value) //reaching to value with useRef() hook, as it names inputRef I gave.
      setAlert(alert => ({ //only change the part when the user types or selects something on it
        ...alert,
        name:false
      }))
    }

    useEffect(() => {
      if(todos.length > 0) {
        localStorage.setItem("todos", JSON.stringify(todos));
      }
    }, [todos]);

    useEffect(() => {
      const localData = localStorage.getItem("todos");
      const parseLocalData = JSON.parse(localData);
      setTodos(parseLocalData || []); //if data is undefined, set it to an empty array
    }, []);


     //DELETE
     const deleteItem = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1); //splice(index, how many items)
        setTodos(newTodos); //set the newTodos array to the states
        localStorage.setItem("todos", JSON.stringify(newTodos));
      };
   
  return (
    <div className="App">
      
      <AddTodos //passing the props to the AddTodos component
       inputRef = {inputRef}
       inputData = {inputData}
       changeAlertForInput = {changeAlertForInput}
       selectRef = {selectRef}
       selectData = {selectData}
       changeAlert = {changeAlert}
       addItems = {addItems}
       alertText = {alertText}
       alert = {alert}
      />

      <Todos //passing the props to the Todos component
      todos = {todos}
      deleteItem = {deleteItem}
      />
     
    </div>
  );
}

export default List;
