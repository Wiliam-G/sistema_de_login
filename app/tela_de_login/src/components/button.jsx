import React from "react";

const Button = (props) => {
    return (
        <button class={props.btn_class} name={props.btn_name}>{props.btn}</button>
    );
};

export default Button;