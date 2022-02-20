import React from 'react'
import './Alert.css'

const Alert = ({setShow}) => {
    return (
        <div className="alertContainer">
        <div className="alert">
        <i class="fas fa-times" onClick={()=>setShow(false)}></i>
      
            <i class="fas fa-exclamation-triangle" id="fa-exclamation-triangle"></i>
            <h2>This account has been banned</h2>
            <h3>Contact Support@mayway.tn for more informations...</h3>
        </div>
        </div>
    )
}

export default Alert
