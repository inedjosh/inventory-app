import React, { ChangeEvent } from 'react';

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<FormInputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
