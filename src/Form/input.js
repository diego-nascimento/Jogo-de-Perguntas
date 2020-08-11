import React from 'react';

function input({ id, label, type, value, setValue, handleblur, ...props }) {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <input
          type={type}
          id={id}
          name={id}
          onChange={({ target }) => setValue(target.value)}
          onBlur={handleblur}
          {...props}
        />
      </label>
    </>
  );
}

export default input;
