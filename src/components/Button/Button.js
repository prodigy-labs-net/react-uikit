import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

const Button = (props) =>{
    if(props.close) {
        return (
            <button className={applyStyles(props)} uk-close="">{props.children}</button>
        )
    }
};

const applyStyles = (props) => {
    return classNames(" ",
        {"uk-xxx": props.xxx},
        " "
    )
};

Button.propTypes = {
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Button.defaultProps = {
    children: undefined
};

export default Button;