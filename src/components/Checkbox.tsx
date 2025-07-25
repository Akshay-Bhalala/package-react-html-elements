import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color?: string;
  disabled?: boolean;
  label?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  color,
  disabled = false,
  className = '',
  style,
  label,
  ...rest
}) => {
  const customStyle = color ? { ...style, '--rb-checkbox-color': color } as React.CSSProperties : style;
  return (
    <label className={`rb-checkbox ${className}`.trim()} style={customStyle}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="rb-checkbox-input"
        {...rest}
      />
      <span className="rb-checkbox-custom" />
      {label && <span className="rb-checkbox-label">{label}</span>}
    </label>
  );
};

export default Checkbox; 