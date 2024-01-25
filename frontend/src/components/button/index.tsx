import React, { ButtonHTMLAttributes } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  customClassName?: string; // Allow custom class name
}


const Button: React.FC<ButtonProps> = ({ variant = 'primary', customClassName, children, ...buttonProps }) => {
    
  const getVariantStyles = () => {
    switch (variant) {
    case 'secondary':
      return 'bg-gray-300 hover:bg-gray-400 text-gray-800';
    case 'danger':
      return 'bg-red-500 hover:bg-red-600 text-white';
    default:
      return 'bg-blue-500 hover:bg-blue-600 text-white';
    }
  };

  return (
    <button
      {...buttonProps}
      className={`px-4 py-2 rounded-md focus:outline-[#0A1D56] ${getVariantStyles()} ${customClassName || ''}`}
    >
      {children}
    </button>
  );
};

export default Button;