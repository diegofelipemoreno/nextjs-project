// Framework dependencies
import React, { useState} from "react";

// Local dependencies
import styles from '../styles/components/Input.module.scss';

const Input = ({id, label, value, errorMsg, onChangeListener, required}) => {
    const [isValid, setIsValid] = useState(true);

    const onChange = (event) => {
        const currentValue = event.target.value;
        const currentValidation = required ? !!currentValue : true;

        setIsValid(currentValidation);
        onChangeListener(id, currentValue, currentValidation);
    }

    return (
      <>
        <label htmlFor={id} className={styles.input__label}>
          {required ? '*' : ''}
          {label}
          <input
            className={styles.input}
            type="text"
            id={id}
            name=""
            defaultValue={value}
            onKeyUp={onChange}
          />
        </label>
        {!isValid &&
        <span className={styles.input__error}>{errorMsg}</span>
        }
      </>
    );
  };
  
  export default Input;