import React, { useContext } from 'react'
import OptionContext from '../context/OptionContext';
import {useOption} from '../context/OptionContext';

const ChangeTemplate = () => {
    //const { changeTemplate } = useContext(OptionContext);  //previous usage before useOption()
    const { changeTemplate } = useOption();

  return (
    <div className='changeTemplate'>
        <b onClick={() => changeTemplate('yellow')} className='yellow'></b>
        <b onClick={() => changeTemplate('blue')} className='blue'></b>
        <b onClick={() => changeTemplate('red')} className='red'></b>
    </div>
  )
}

export default ChangeTemplate