import './App.css';
import { useState, useEffect  } from 'react';

function App() {

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
        

    const changeAlert = e => {
      setSelectData(e.target.value) //remove the red background if the user adds the item
      setAlert(alert => ({ //only change the part when the user types or selects something on it
        ...alert,
        status:false
      }))
    }

    const changeAlertForInput = e => {
      setInputData(e.target.value) //remove the red background if the user adds the item
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
      setTodos(parseLocalData || []);
    }, []);
   
  return (
    <div className="App">
      <div className='container'>
        <input
          value={inputData}
          className={alert.name ? 'alertInput' : ''}
          type="text" 
          placeholder="Type something..."
          onChange={(e) => changeAlertForInput(e)}>
        </input>
        <select 
        value={selectData}
        className={alert.status ? 'alertStatus' : ''}
        onChange={(e) => changeAlert(e)}>
          <option value="">Choose</option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
        </select>
        <button onClick={addItems}>Add</button>
      </div>
 
      <p>
        {alertText} 
      </p>

      <ul className='list'>
        {
          todos.map((todo, index) =>
          <li key={index}>
            <span>{todo.name}</span>
            <strong className={todo.status === '1' ? 'status1' : todo.status === '2' ? 'status2' : 'status3'}>{todo.status}</strong>
            <b className='liBtn'>Delete</b>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
