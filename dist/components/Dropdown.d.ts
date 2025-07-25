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
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
