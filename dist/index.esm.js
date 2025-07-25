import { jsx, jsxs } from 'react/jsx-runtime';

const Button = ({ color, variant = 'primary', style, className = '', children, ...rest }) => {
    const customStyle = color ? { ...style, backgroundColor: color, borderColor: color } : style;
    return (jsx("button", { className: `rb-btn rb-btn-${variant} ${className}`.trim(), style: customStyle, ...rest, children: children }));
};

const ToggleSwitch = ({ checked, onChange, color, disabled = false, className = '', style, ...rest }) => {
    const customStyle = color ? { ...style, '--rb-toggle-color': color } : style;
    return (jsxs("label", { className: `rb-toggle-switch ${className}`.trim(), style: customStyle, children: [jsx("input", { type: "checkbox", checked: checked, onChange: onChange, disabled: disabled, className: "rb-toggle-input", ...rest }), jsx("span", { className: "rb-toggle-slider" })] }));
};

const RadioButton = ({ checked, onChange, name, value, color, disabled = false, className = '', style, label, ...rest }) => {
    const customStyle = color ? { ...style, '--rb-radio-color': color } : style;
    return (jsxs("label", { className: `rb-radio ${className}`.trim(), style: customStyle, children: [jsx("input", { type: "radio", checked: checked, onChange: onChange, name: name, value: value, disabled: disabled, className: "rb-radio-input", ...rest }), jsx("span", { className: "rb-radio-custom" }), label && jsx("span", { className: "rb-radio-label", children: label })] }));
};

const Checkbox = ({ checked, onChange, color, disabled = false, className = '', style, label, ...rest }) => {
    const customStyle = color ? { ...style, '--rb-checkbox-color': color } : style;
    return (jsxs("label", { className: `rb-checkbox ${className}`.trim(), style: customStyle, children: [jsx("input", { type: "checkbox", checked: checked, onChange: onChange, disabled: disabled, className: "rb-checkbox-input", ...rest }), jsx("span", { className: "rb-checkbox-custom" }), label && jsx("span", { className: "rb-checkbox-label", children: label })] }));
};

const Dropdown = ({ options, value, onChange, color, disabled = false, className = '', style, placeholder, ...rest }) => {
    const customStyle = color ? { ...style, '--rb-dropdown-color': color } : style;
    return (jsxs("select", { className: `rb-dropdown ${className}`.trim(), value: value, onChange: onChange, disabled: disabled, style: customStyle, ...rest, children: [placeholder && jsx("option", { value: "", disabled: true, hidden: true, children: placeholder }), options.map(opt => (jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }));
};

const InputField = ({ color, style, className = '', ...rest }) => {
    const customStyle = color ? { ...style, '--rb-input-color': color } : style;
    return (jsx("input", { className: `rb-input-field ${className}`.trim(), style: customStyle, ...rest }));
};

export { Button, Checkbox, Dropdown, InputField, RadioButton, ToggleSwitch };
