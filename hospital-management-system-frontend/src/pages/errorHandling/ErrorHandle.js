import React from 'react'
import { Link } from 'react-router-dom'

const ErrorHandle = () => {
  return (
    <div >
      <div style={{color:"red",backgroundColor:"white",fontSize:"100px"}}>Please authorise !!</div>
     
     <Link to={`/`}>Click to authorize</Link>
     {/* <a style={{fontSize:"30px",color:"blue",fontWeight:"bold"}} >click authorise</a> */}
    
     <Link to={`/hello`}><button>Hello</button></Link>
    
    </div>
    
  )
}

export default ErrorHandle