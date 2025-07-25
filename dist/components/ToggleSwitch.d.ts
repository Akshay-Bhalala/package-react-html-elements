import React from 'react';
export interface ToggleSwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    color?: string;
    disabled?: boolean;
}
declare const ToggleSwitch: React.FC<ToggleSwitchProps>;
export default ToggleSwitch;
