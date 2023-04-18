import * as React from "react";
import {useInput} from "@test/pages/test/useInput";

function SearchBar() {
    const [inputValue, handleChange] = useInput('hi');
    const [inputValue2, handleChange2] = useInput('hello');
    return <>
        <input value={inputValue} onChange={handleChange}/>
        <div>{inputValue}</div>
        <input value={inputValue2} onChange={handleChange2}/>
        <div>{inputValue2}</div>
    </>
}

export {SearchBar}