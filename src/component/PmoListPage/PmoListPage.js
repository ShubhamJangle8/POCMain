import React from 'react'
import { useHistory } from 'react-router'
import './PmoListPage.css'

function RequestListPage() {
    const history = useHistory()

    // const handleClick = () => {
    //     let path = '/pmo/view'
    //     history.push(path)
    // }
    return (
        <div className='main'>
            <div>
                PMO Dashboard
            </div>
            <div>
                View Request
            </div>
            {/* <div className='heightReqList d-flex justify-content-end align-items-end'>
                <div class="floatingButton">
                    <span class="dot" onClick={handleClick}>
                        <span class="upper"></span>
                        <span class="middle"></span>
                        <span class="lower"></span>
                    </span>
                </div>
            </div> */}

        </div>
    )
}

export default RequestListPage
