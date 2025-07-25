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
declare const RadioButton: React.FC<RadioButtonProps>;
export default RadioButton;
