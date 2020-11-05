import React from "react";

export default function Loader(props) {
    return (<div>
        <progress value={50} max={100}/>
    </div>)
}