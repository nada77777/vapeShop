import React from 'react';
import styles from './button.module.css';

const Button = ({ text, item, onClickBtn }) => {

    return (
        <button onClick={() => onClickBtn(item)} className={styles.button}>{text}</button>
    );
};

export default Button;