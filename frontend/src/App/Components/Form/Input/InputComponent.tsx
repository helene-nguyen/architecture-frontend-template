//~ Import modules
import './Styles/main.scss';
import { forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type InputProps = {
  id: string;
  name: string;
  label: string;
  ariaLabel: string;
  type?: string;
  className?: string;
  placeholder?: string;
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'input'>;

const InputComponent = forwardRef<HTMLInputElement, InputProps>(({ id, name, label, ariaLabel, type = 'text', className = '', placeholder, ...props }, ref) => {
  return (
    <>
      <label>{label}</label>
      <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        aria-label={ariaLabel}
        placeholder={placeholder}
        className={className} {...props} />
    </>
  );
});

export default InputComponent;
