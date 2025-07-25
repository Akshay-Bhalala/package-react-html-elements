import React from 'react';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    variant?: ButtonVariant;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
