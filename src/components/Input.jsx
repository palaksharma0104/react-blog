import React, { useId } from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

// Define PropTypes for the component
Input.propTypes = {
  label: PropTypes.string, // Label is an optional string
  type: PropTypes.string, // Type is a string and defaults to "text"
  className: PropTypes.string, // Additional CSS classes as a string
  props: PropTypes.object, // Any additional props passed to the input
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]), // Ref is either a function or a React ref object
};

// Default props
Input.defaultProps = {
  type: "text",
  className: "",
};

export default Input;
