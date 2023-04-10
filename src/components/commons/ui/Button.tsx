import React from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={`shadow-xl bg-blue-100 p-2 text-xs min-w-[100px] ${className}`}
      {...rest}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
