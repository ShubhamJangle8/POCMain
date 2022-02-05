import React from 'react'
import './Accordian.css'
import { useState } from 'react';
import { MDBIcon } from "mdb-react-ui-kit";
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>


const MyAccordian = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);
  // let [check, setCheck] = useState({ 'Open': false, 'In Progress': false, 'On Hold': false, 'Closed': false, 'Cancelled': false });
  let [check,setCheck] = useState(false)

  // setCheck = (check, option) => {
  //   let row = check.option
  // }
  return (
    <>
      <div className='main-heading flex justify-between'>

        <h3 className='mx-4 my-3'>{question} </h3>
        <div className='mx-4 my-3'>
        {
          show ?
          <MDBIcon icon="angle-down" className='fa-2x fst-normal' onClick={() => setShow(!show)} /> :
          <MDBIcon icon="angle-up" className='fa-2x' onClick={() => setShow(!show)} />
        }
        </div>


      </div>
      {show && <div>
        <ul>

          {answer.map((option => {
            return <div className='d-flex align-items-center'>
              {/* {
                <i class={check[option] ? "fas fa-check-square" : "far fa-square"} onClick={() => {
                  setCheck(check, option)
                }}></i>
              } */}
              {
                <i class={check ? "fas fa-check-square" : "far fa-square"} onClick={() => {
                  setCheck(!check)
                }}></i>
              }


              <li>{option}</li>
            </div>
          }))}


        </ul>
      </div>}
    </>
  )
}

export default MyAccordian
