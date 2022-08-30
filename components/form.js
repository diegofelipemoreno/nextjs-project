// Framework dependencies
import React from "react";

// Local dependencies
import style from '../styles/components/Form.module.scss';
import Button from './button';

function Form({
  children,
  id,
  title,
  onSubmitListener,
  submitDisabled
  }) {
  return (
    <form id={id} onSubmit={onSubmitListener} className={style.form}>
      <fieldset>
        <legend>{title}</legend>
        <>{children}</>
        <div>
        <Button
        type="submit"
        label="Submit"
        disabled={submitDisabled}
        />
        </div>
      </fieldset>
    </form>
  );
}

export default Form;