import React from 'react'
import { useHistory } from 'react-router'
import { useState } from 'react'
import './FloatingButton.css'

function FloatingButton() {
    const history = useHistory()
    // console.log(history)
    const handleClick = () => {
        let path = '/createRequest'
        history.push(path)
    }
    const [addrequest, setAddrequest] = useState(false)
    return (
        <div>
            <div className='floatingButton'>
                {/* <div className='heightReqList d-flex justify-content-end align-items-end'>
                    <div className="floatingButton">
                        <span className="dot bg-dark" onClick={handleClick}>
                            <span className="upper"></span>
                            <span className="middle"></span>
                            <span className="lower"></span>
                        </span>
                    </div>
                </div> */}
                {
                    addrequest ?
                        <div className={`add p-4 cursor-pointer bg-black flex justify-center items-center rounded-full`} onClick={handleClick} onMouseLeave={() => setAddrequest(false)}>
                            <div className='text-white font-bold text-3xl'>+</div>
                        </div> :
                        <div className={`hamburger p-3 cursor-pointer bg-black rounded-full`} onClick={handleClick} onMouseEnter={() => setAddrequest(true)}>
                            <div className='line h-0.5 w-6 my-1 bg-white'></div>
                            <div className='line h-0.5 w-6 my-1 bg-white'></div>
                            <div className='line h-0.5 w-6 my-1 bg-white'></div>
                        </div>

                }
            </div>

        </div>
    )
}

export default FloatingButton
