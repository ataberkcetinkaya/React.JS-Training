import React from 'react'

const AddTodos = ({ //props to set
    inputRef,
    inputData,
    changeAlertForInput,
    selectRef,
    selectData,
    changeAlert,
    addItems,
    alertText,
    alert
}) => {
  return (
    <>
    <div className='container'>
        <input
          ref = {inputRef}
          value={inputData}
          className={alert.name ? 'alertInput' : ''}
          type="text" 
          placeholder="Type something..."
          onChange={changeAlertForInput}>
        </input>
        <select 
        ref = {selectRef}
        value={selectData}
        className={alert.status ? 'alertStatus' : ''}
        onChange={changeAlert}>
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
    </>
  )
}

export default AddTodos