import React from 'react'

export const Pagination = ({page, prevPage, nextPage}) => {
  
  return (
    <>
      <div className=' my-7'>
        <div className='flex justify-center cursor-pointer'>
          <div className='p-3 bg-blue-400  rounded-2xl rounded-r-none' onClick={prevPage}>
            <button>Previous</button></div>
          <div className='py-3 px-4 border'>
            <button>{page}</button></div>
          <div className='p-3 bg-blue-400 rounded-2xl rounded-l-none' onClick={nextPage}>
            <button>Next</button></div>
        </div>



      </div>

    </>
  )
}


