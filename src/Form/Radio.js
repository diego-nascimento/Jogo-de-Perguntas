import React from 'react';

function Radio({ options, value, setValue, ...props }) {
  return (
    <form>
      {options.map((option, index) => {
        return (
          <label key={option + index}>
            <input
              type="radio"
              checked={value === option}
              onChange={({ target }) => setValue(target.value)}
              value={option}
              {...props}
            />
            {option}
          </label>
        );
      })}
    </form>
  );
}

export default Radio;
