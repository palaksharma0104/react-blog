import React, { useId } from 'react';
import PropTypes from 'prop-types';

const Select = React.forwardRef(function Select(
  { options, label, className = '', ...props },
  ref
) {
  const id = useId();
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''>{label}</label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

// Define prop types for the Select component
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired, // options must be an array of strings
  label: PropTypes.string, // label is an optional string
  className: PropTypes.string, // className is optional and should be a string
  props: PropTypes.object, // any additional props passed to the select element
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]), // ref is either a function or a React ref object
};

// Default props for optional values
Select.defaultProps = {
  label: '',
  className: '',
};

export default Select;
