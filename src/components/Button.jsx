import PropTypes from "prop-types";

function Button({ children, type = "button", bgColor = "bg-blue-600", textColor = "text-white", className = "" }) {
  return (
    <button
      type={type}
      className={`${bgColor} ${textColor} ${className} inline-block px-6 py-2 duration-200 rounded-full`}
    >
      {children}
    </button>
  );
}

// Define prop types
Button.propTypes = {
  children: PropTypes.node.isRequired, // Children must be a valid React node
  type: PropTypes.string, // Button type (e.g., "button", "submit")
  bgColor: PropTypes.string, // Background color as a CSS class
  textColor: PropTypes.string, // Text color as a CSS class
  className: PropTypes.string, // Additional CSS classes
};

// Default props (optional)
Button.defaultProps = {
  type: "button",
  bgColor: "bg-blue-600",
  textColor: "text-white",
  className: "",
};

export default Button;
