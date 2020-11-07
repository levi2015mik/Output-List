import React, {useState,useEffect} from "react";
import El from "./El";

export default function List(props) {

    // возвращает true, если конец страницы не виден
    const countShowBtnToLast = () => window.pageYOffset + window.innerHeight < document.body.scrollHeight - 100;
    const [isShowBtnToLast,setShowBtnToLast] = useState(countShowBtnToLast());

    // присвоение результата countShowBtnToLast в state
    const setShowBtnToLastVal =()=>setShowBtnToLast(countShowBtnToLast());

    // Через хук происходит обновление свойства isShowBtnToLast и подписка на scroll
    useEffect(()=>{
        setShowBtnToLast(countShowBtnToLast());
        window.addEventListener('scroll',setShowBtnToLastVal);
        return ()=>window.removeEventListener('scroll',setShowBtnToLastVal)
    },[props.persons]);


    // Прокрутка в конец
    function scrollLast() {
        window.scroll(0,document.documentElement.scrollHeight)
    }


    return (<div className={"list"}>
        {isShowBtnToLast &&
        <div className={"btn-to-last"}>
            <button onClick={scrollLast}>
                <img src={"down.png"} alt={"last"}/>
            </button>
        </div>
        }
        {props.persons.map((person,item)=>(
            <El key={item} person={person}/>
        ))}
    </div>)
}