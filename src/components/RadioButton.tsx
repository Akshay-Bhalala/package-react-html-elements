import React from 'react';

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  color?: string;
  disabled?: boolean;
  label?: React.ReactNode;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  onChange,
  name,
  value,
  color,
  disabled = false,
  className = '',
  style,
  label,
  ...rest
}) => {
  const customStyle = color ? { ...style, '--rb-radio-color': color } as React.CSSProperties : style;
  return (
    <label className={`rb-radio ${className}`.trim()} style={customStyle}>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        name={name}
        value={value}
        disabled={disabled}
        className="rb-radio-input"
        {...rest}
      />
      <span className="rb-radio-custom" />
      {label && <span className="rb-radio-label">{label}</span>}
    </label>
  );
};

export default RadioButton; 