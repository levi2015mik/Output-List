import React from "react";

export default function Rules(props) {
    // коллекция иконок для кнопки сортировки
    const sortIcons = ['icons8-sort.png','icons8-sort-to-up.png','icons8-sort-to-down.png'];

    return (<div className={"rules"}>
        <div>Output of:
            <select value={props.nItems} onChange={props.onChange}>
                <option value={1}>1</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={500}>500</option>
            </select>
        </div>
        <div>
            sort by: timestamp <button onClick={props.onSort}><img src={sortIcons[props.sort]}/></button>
        </div>
        <div>
            <label>Generate error query <input onChange={props.createError} type={"checkbox"}/></label>
        </div>
    </div>)
}