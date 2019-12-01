import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../index.scss';
import applyMargin from "../Common/applyMargin";
import applyAlign from "../Common/applyAlign";

const Image = (props) =>{
    return (
        <img className={
            applyStyles(props) +
            applyMargin(props) +
            applyAlign(props)
        } data-src={props.src} width={props.width} height={props.height} alt={props.alt} uk-img="">{props.children}</img>
    )
};

const applyStyles = (props) => {
    return classNames(" ",
        " "
    )
};

Image.propTypes = {
    /**  */
    src: PropTypes.string,
    /**  */
    width: PropTypes.number,
    /**  */
    height: PropTypes.number,
    /**  */
    alt: PropTypes.string,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Image.defaultProps = {
    src: false,
    width: false,
    height: false,
    children: undefined
};

export default Image;