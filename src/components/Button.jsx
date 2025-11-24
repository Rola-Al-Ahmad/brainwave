import { memo } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  ariaLabel,
  ariaControls,
  ariaExpanded,

  type = "button",
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel || undefined}
      aria-controls={ariaControls || undefined}
      aria-expanded={ariaExpanded || undefined}
    >
      <span className={spanClasses}>{children}</span>
      <span aria-hidden="true">{ButtonSvg(white)}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} aria-label={ariaLabel || undefined}>
      <span className={spanClasses}>{children}</span>
      <span aria-hidden="true">{ButtonSvg(white)}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default memo(Button);
