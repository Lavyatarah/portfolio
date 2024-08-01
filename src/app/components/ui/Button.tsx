// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, ...props }) => {
  const baseStyle = 'py-2 px-4 rounded-lg text-white focus:outline-none focus:ring-2';
  const variantStyle = variant === 'primary'
    ? 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500'
    : 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-500';
  
  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    />
  );
};

export default Button;
