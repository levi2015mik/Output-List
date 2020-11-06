import React from "react";


export default function ErrorHandler(props) {
    return (
        <div
            className={"error__wrapper"}
            style={{display:(props.error)? "block": "none"}}
        >
            <div>
                <img src={"err.png"}/>
                <p>{props.error && props.error.message}</p>
            </div>
        </div>
    )
}