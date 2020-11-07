import React, {useState} from "react";

export default function El(props) {
    const [details,setDetails] = useState(false);
    const timestamp = (new Date(props.person.timestamp)).toLocaleString();
    return (
        <div
            className={"el"}
            onMouseOver={()=>setDetails(true)}
            onMouseOut ={()=>setDetails(false)}
        >
            <h3>{props.person.firstName} {props.person.lastName}</h3>
            <p>{props.person.message}</p>
            {details && (<ul>
                <li><span>Phone:</span> {props.person.phone}</li>
                <li><span>Email:</span> {props.person.email}</li>
            </ul>)}
            <time>{timestamp}</time>
            <hr/>
    </div>)
}