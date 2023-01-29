import React from "react";

export default function Alert(props) {
//   false nothing will return  */}
//     {/* // because initially props.alert is null to avoid error first we which if
{/* prop alert is obj which we sent from app.js */}
    return (

    <div  style={{ height: "50px" }}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            
            <strong>{props.alert.type}</strong>: {props.alert.msg}
           
        </div>}
    </div>
  );
}
