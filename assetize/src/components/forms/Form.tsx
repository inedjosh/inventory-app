import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextInput from './TextInput';

interface FormData {
  [key: string]: string;
}

interface FormField {
  label: string;
  type: string;
  name: string;
  validation?: (value: string) => string | null;
}

interface FormProps {
  fields: FormField[];
  initialValues: FormData;
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ fields, initialValues, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const fieldErrors: { [key: string]: string } = {};
    let isValid = true;

    fields.forEach((field) => {
      const { name, validation } = field;
      const value = formData[name];
      if (validation) {
        const error = validation(value);
        if (error) {
          fieldErrors[name] = error;
          isValid = false;
        }
      }
    });

    if (isValid) {
      onSubmit(formData);
    } else {
      setErrors(fieldErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => {
        const { label, type, name } = field;
        const value = formData[name];
        const error = errors[name];

        return (
          <TextInput
            key={name}
            label={label}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
          />
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
