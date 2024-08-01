import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, id, ...props }) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-800 dark:text-gray-200"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        {...props}
        className={`border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-lg p-3 text-base placeholder-gray-500 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
