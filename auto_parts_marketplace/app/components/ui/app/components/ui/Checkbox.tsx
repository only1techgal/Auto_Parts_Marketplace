import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  className = '',
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className={`relative flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="hidden"
        />
        <div
          className={`w-5 h-5 rounded border ${
            checked
              ? 'bg-blue-500 border-blue-500'
              : 'bg-white border-gray-300'
          } ${
            disabled
              ? 'opacity-50 cursor-not-allowed'
              : 'cursor-pointer hover:border-blue-500'
          } transition-colors duration-200`}
        >
          {checked && (
            <Check
              className="w-4 h-4 text-white absolute top-0.5 left-0.5"
              strokeWidth={3}
            />
          )}
        </div>
      </div>
      <label
        htmlFor={id}
        className={`ml-3 text-sm ${
          disabled ? 'text-gray-400' : 'text-gray-700'
        } cursor-pointer select-none`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
