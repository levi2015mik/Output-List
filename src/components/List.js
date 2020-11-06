import React from "react";
import El from "./El";

export default function List(props) {
    return (<div>
        {props.persons.map(person=>(
            <El key={person.id} person={person}/>
        ))}
    </div>)
}