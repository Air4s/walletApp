import React, { InputHTMLAttributes } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputType?: string;
  value?: string | number;
}


const Input: React.FC<InputProps> = ({ label, inputType = 'text', value, ...inputProps }) => {
  return (
    <div className="mb-4">
      {label &&
        <label className="block text-sm font-medium text-black">
          {label}
        </label>
      }
      <input
        {...inputProps}
        type={inputType}
        min={0}
        value={value}
        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#0A1D56]"
      />
    </div>
  );
};

export default Input;