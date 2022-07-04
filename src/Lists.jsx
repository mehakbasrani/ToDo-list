import React from "react"
import "./index.css"

const Lists = (props)=>{
    return (<>
    <div className = "list">
        <i className ="fa fa-times"
         aria-hidden="true" 
         onClick = {() =>{
            props.onSelect(props.id)
         }} />
    <li>{props.listItem}</li>
    </div>
   </> );
}

export default Lists
 