import React from "react";

interface SelectProps {
  options: string[];
  selectedOption: string;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Select({ options, selectedOption, handleSelectChange }: SelectProps) {
  return (
    <select value={selectedOption} onChange={handleSelectChange} className="select select-secondary">
      <option value="" disabled>
        Select an option
      </option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
