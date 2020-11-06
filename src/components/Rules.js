import React from "react";

export default function Rules(props) {
    return (<div>
        Output of:
        <select value={props.nItems} onChange={props.onChange}>
            <option value={1}>1</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={500}>500</option>
        </select>
        sort by: <button onClick={props.onSort}>timestamp {props.sort}</button>
    </div>)
}