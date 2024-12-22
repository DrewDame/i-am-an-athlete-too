import React from 'react';

const Button = ({id, onClick, type = "button", children}) => {
    return (
        <button id={id} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;