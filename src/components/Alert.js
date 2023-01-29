import React from 'react'

export default function Alert(props) {
    return (
        // because initially props.alert is null to avoid error first we which if false nothing will return 
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* prop alert is obj which we sent from app.js */}
            <strong>{props.alert.type}</strong>: {props.alert.msg} 
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}
