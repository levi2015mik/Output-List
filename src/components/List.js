import React from "react";
import El from "./El";

export default function List(props) {
    return (<div className={"list"}>
        {props.persons.map((person,item)=>(
            <El key={item} person={person}/>
        ))}
    </div>)
}