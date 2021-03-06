import React from 'react';
import classnames from 'classnames'
import styles from './styling.module.css'
const TextInputGroup =  ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
  }) => {
    return (
      <div className ={styles.pcs}>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          className={classnames('form-control form-control-lg', {
            'is-invalid': error
          })}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div></div>
    );
  };
  

export default TextInputGroup;
