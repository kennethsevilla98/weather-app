import React from 'react';

export interface SearchInputProps
  extends React.ComponentPropsWithoutRef<'div'> {
  inputProps?: React.ComponentPropsWithoutRef<'input'>;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  className,
  type = 'text',
  placeholder,
  onChange,
  inputProps = {},
  ...rest
}) => {
  return (
    <div className={`relative w-full ${className}`} {...rest}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:border-blue-100 block w-full pl-10 p-2.5 "
        {...inputProps}
      />
    </div>
  );
};
