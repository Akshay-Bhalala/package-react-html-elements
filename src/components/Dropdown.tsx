import React from 'react';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: DropdownOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  color?: string;
  disabled?: boolean;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  color,
  disabled = false,
  className = '',
  style,
  placeholder,
  ...rest
}) => {
  const customStyle = color ? { ...style, '--rb-dropdown-color': color } as React.CSSProperties : style;
  return (
    <select
      className={`rb-dropdown ${className}`.trim()}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={customStyle}
      {...rest}
    >
      {placeholder && <option value="" disabled hidden>{placeholder}</option>}
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
};

export default Dropdown; 