import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";

import Rules from "./Rules"

let container, onChange, onSort, createError;

beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement("div");
    document.body.appendChild(container);

    // Создаем функции - шпионы
    onChange      = jest.fn(e=>{e.persist()});
    onSort        = jest.fn(e=>{e.persist()});
    createError   = jest.fn(e=>{e.persist()});
});

afterEach(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("Rules - component",()=>{
    test("render",()=> {
        act(() => {
            render(<Rules
                nItems = {10}
                sort = {1}
                onChange = {onChange}
                onSort = {onSort}
                createError = {createError}
            />, container)
        });
        expect(container.textContent).toContain("Output of:");
        const select = document.querySelector("select");
        expect(select.value).toBe("10");
    });

    test("events-click to sort button",()=> {
        act(() => {
            render(<Rules
                nItems = {10}
                sort = {1}
                onChange = {onChange}
                onSort = {onSort}
                createError = {createError}
            />, container);
            const button = document.querySelector("button");
            button.dispatchEvent(new MouseEvent("click",{ bubbles: true }));

        });
        expect(onSort).toHaveBeenCalled();
    });

    test("events - error checkbox",()=> {
        let checkbox;
        act(() => {
            render(<Rules
                nItems = {10}
                sort = {1}
                onChange = {onChange}
                onSort = {onSort}
                createError = {createError}
            />, container);
            checkbox = document.querySelector("input[type=checkbox]");
            const select = document.querySelector("select");
            checkbox.dispatchEvent(new MouseEvent("click",{ bubbles: true }))

        });
        expect(createError.mock.calls[0][0].target.checked).toBe(true);
        act(()=>{checkbox.dispatchEvent(new MouseEvent("click",{ bubbles: true }))});
        expect(createError.mock.calls[0][0].target.checked).toBe(false);
    });

    test("events-select",()=>{
        let select;
        act(() => {
            render(<Rules
                nItems = {10}
                sort = {1}
                onChange = {onChange}
                onSort = {onSort}
                createError = {createError}
            />, container);
            select = document.querySelector("select");
            Simulate.change(select,{target:{value:1}});

        });
        expect(onChange.mock.calls[0][0].target.value).toBe(1)
    })


});
