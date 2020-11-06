import React from "react";

export default function List(props) {
    return (<div>
        {JSON.stringify(props.persons)}
    </div>)
}