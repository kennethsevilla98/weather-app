import React from 'react';

const Container: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={`container mx-auto max-w-md p-4 mt-28 text-gray-500 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
