import React from 'react'
import { MDBIcon } from "mdb-react-ui-kit";

export const Entries = (limit, changeLimit, add, subtract) => {
  return (
    <div>
      <div className='d-flex align-items-center justify-content-between search-entries'>
        <label className='p-2'>Show</label>
        <input className='p-2 border' value={limit} onChange={changeLimit}></input>
        <MDBIcon icon="angle-down" className='fa-2x fst-normal p-2 entries-change' onClick={add} />
        <MDBIcon icon="angle-up" className='fa-2x fst-normal p-2 entries-change' onClick={subtract} />
      </div>
    </div>
  )
}
