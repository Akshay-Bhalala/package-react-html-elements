import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  color,
  variant = 'primary',
  style,
  className = '',
  children,
  ...rest
}) => {
  const customStyle = color ? { ...style, backgroundColor: color, borderColor: color } : style;
  return (
    <button
      className={`rb-btn rb-btn-${variant} ${className}`.trim()}
      style={customStyle}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button; 