import React from 'react';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  color,
  style,
  className = '',
  ...rest
}) => {
  const customStyle = color ? { ...style, '--rb-input-color': color } as React.CSSProperties : style;
  return (
    <input
      className={`rb-input-field ${className}`.trim()}
      style={customStyle}
      {...rest}
    />
  );
};

export default InputField; 