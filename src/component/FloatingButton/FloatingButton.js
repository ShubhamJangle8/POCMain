import React from 'react'
import { useHistory } from 'react-router'
import './FloatingButton.css'

function FloatingButton() {
    const history = useHistory()
    // console.log(history)
    const handleClick = () => {
        let path = '/createRequest'
        history.push(path)
    }
    return (
        <div>
            <div className='floatingButton'>
                <div className='heightReqList d-flex justify-content-end align-items-end'>
                    <div className="floatingButton">
                        <span className="dot bg-dark" onClick={handleClick}>
                            <span className="upper"></span>
                            <span className="middle"></span>
                            <span className="lower"></span>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FloatingButton
