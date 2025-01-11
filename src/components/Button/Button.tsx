import React from "react";
import "./Button.css";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
}

function Button({ children, className }: ButtonProps) {
  return <button className={`btn ${className || ""}`}>{children}</button>;
}

export default Button;
