import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import El from "./El"


const person = {
    "id": 503,
    "firstName": "Lior",
    "lastName": "Vanhoose",
    "email": "RGoodwin@scelerisque.ly",
    "phone": "(738)459-5729",
    "message": "etiam adipiscing molestie et sed lacus placerat lorem nunc scelerisque ac vel etiam nec odio porttitor nunc tincidunt fringilla fringilla amet neque vestibulum placerat massa ac dui mattis elit id mattis facilisis",
    "timestamp": "2077-03-12T12:54:42.059Z"
};

let container = null;
beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("El - component list element",()=>{
   test("render with data",()=>{
       act(()=>{
           render(<El person={person}/>, container)
       });
       expect(container.textContent).toContain("Lior");
       const time = (new Date(person.timestamp)).toLocaleString();
       expect(container.textContent).toContain(time)
   });

   test("mouse evenas",()=>{
       act(()=>{
           render(<El person={person}/>, container)
       });
       const element = document.querySelector(".el");
       expect(element).not.toBeNull();
       act(()=>{
           element.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
       });

       expect(element.textContent).toContain("Phone: (738)459-5729");
       act(()=>{
           element.dispatchEvent(new MouseEvent("mouseout", { bubbles: true }));
       });
       expect(element.textContent).not.toContain("Phone: (738)459-5729");
   })
});