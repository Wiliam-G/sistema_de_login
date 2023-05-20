import React from "react";

const Input = (props) => {
    return (
        <input type="text" placeholder={props.label} class={props.input_label}/>
    );
};

export default Input;