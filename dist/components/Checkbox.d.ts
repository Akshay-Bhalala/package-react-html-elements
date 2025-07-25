import React from 'react';
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    color?: string;
    disabled?: boolean;
    label?: React.ReactNode;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
