import { ChevronDown } from 'lucide-react';
import React from 'react';

type Option = {
  label: string;
  value: string;
};

interface ComboboxProps {
  options: Option[];
  value?: string;
  onChange: (value: string) => void; // Ajusta el tipo de onChange
  required?: boolean;
}

export function Combobox({ options, value, onChange }: ComboboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue); // Aquí llamamos a la función onChange con el valor seleccionado
  };

  return (
    <>
    <select
      value={value}
      onChange={handleChange} // Aquí pasamos la función handleChange como manejador de eventos onChange
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-200"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
    <ChevronDown />
    </>
  );
}
