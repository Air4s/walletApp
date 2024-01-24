import React, { InputHTMLAttributes } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}


const Input: React.FC<InputProps> = ({ label, ...inputProps }) => {
  return (
    <div className="mb-4">
      {label &&
        <label className="block text-sm font-medium text-black">
          {label}
        </label>
      }
      <input
        {...inputProps}
        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#0A1D56]"
      />
    </div>
  );
};

export default Input;