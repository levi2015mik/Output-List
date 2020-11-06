import React from "react";

export default function El(props) {
    return (<div>
        <p>{props.person.firstName}</p>
        <p>{props.person.lastName}</p>
        <p>{props.person.message}</p>
        <p>{(new Date(props.person.timestamp)).toLocaleString()}</p>
        <hr/>
    </div>)
}