import React from "react";

export const useInput = (value : string) => {
    const [inputValue, setInputValue] = React.useState(value)

    const handleChange = (e) =>{
        setInputValue(e.target.value);
    };

    return [inputValue, handleChange];
}