import React from 'react';

export interface ToggleSwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color?: string;
  disabled?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  color,
  disabled = false,
  className = '',
  style,
  ...rest
}) => {
  const customStyle = color ? { ...style, '--rb-toggle-color': color } as React.CSSProperties : style;
  return (
    <label className={`rb-toggle-switch ${className}`.trim()} style={customStyle}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="rb-toggle-input"
        {...rest}
      />
      <span className="rb-toggle-slider" />
    </label>
  );
};

export default ToggleSwitch; 