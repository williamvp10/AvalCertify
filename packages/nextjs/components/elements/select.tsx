import React from "react";

interface SelectProps {
  placeholder: string;
  options: string[];
  selectedOption: string;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Select({ placeholder = "Select an option", options, selectedOption, handleSelectChange }: SelectProps) {
  return (
    <select value={selectedOption} onChange={handleSelectChange} className="select select-secondary">
      <option value="" disabled>
        {placeholder ? placeholder : "Select an option"}
      </option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
