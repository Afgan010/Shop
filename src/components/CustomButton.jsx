import { useNavigate } from "react-router-dom";

const CustomButton = ({
  customClassName = "",
  customStyle,
  text,
  onClick,
  isDisabled,
  lInkTo,
  loading,
  leftIcon,
  rightIcon,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(lInkTo);
  };

  return (
    <button
      style={customStyle}
      className={`customButton ${lInkTo ? "isLink" : ""} ${customClassName}`}
      onClick={lInkTo ? handleNavigate : onClick}
      disabled={loading || isDisabled}
    >
      {!loading && leftIcon}
      {loading ? (
        <div class="loader">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      ) : (
        text
      )}
      {!loading && rightIcon}
    </button>
  );
};

export default CustomButton;
