import React from 'react';

const Button = ({id, onClick, type = "button", children, className}) => {
    return (
        <button id={id} onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;