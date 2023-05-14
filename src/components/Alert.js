import React from 'react'

function Alert(props) {
  return (
      // capitalized=()=>{

      // }
      props.alert && <div className={`alert alert-${props.alert.types} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.types}</strong>: {props.alert.msg}
      </div>
  )
}

export default Alert 