import React from "react";

export default function Loader(props) {
    return (
    <div
        style={{display:(props.status)? "block": "none"}}
        className={"loader__wrapper"}
    >
        <div><img src={"loader.png"}/></div>
    </div>)
}