import React from 'react'
import { useLocation } from 'react-router'

function ReqLandingPage(props) {
  const location = useLocation()
  console.log(location)
  // const {object} = props.location.state
  return (
    <div>
      Dashboard for Requestor
      <div>
      {
        // object.map((val) => {<div>{val}</div>
        // })
      }</div>
    </div>
  )
}

export default ReqLandingPage
