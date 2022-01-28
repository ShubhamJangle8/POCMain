import React from 'react'
import { useState } from 'react';
import MyAccordian from './MyAccordian';
import { filter } from './api';
import './Accordian.css'

const Accordian = () => {
  const [data, setData] = useState(filter);
  // let a = 1;
  return (
      <div className='accordian'>
        {
          data.map((curElement) => {
            // console.log(curElement);
            const { id, question, answer } = curElement
            return <MyAccordian key={id} {...curElement} />

          })
        }
      </div>


  )
}

export default Accordian
