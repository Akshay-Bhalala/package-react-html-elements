import React from 'react';
export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    color?: string;
}
declare const InputField: React.FC<InputFieldProps>;
export default InputField;
