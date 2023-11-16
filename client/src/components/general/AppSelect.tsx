interface AppSelectProps {
 label: string;
 options: { label: string; value: string }[];
 onChange: (value: string) => void;
 value: string;
}

function AppSelect({ options, label, value, onChange }: AppSelectProps) {
 const optionsElements = options.map((option) => (
  <option key={option.value} value={option.value}>
   {option.label}
  </option>
 ));

 return (
  <div>
   <label htmlFor="category-select">{label}</label>
   <select
    value={value}
    onChange={({ target }) => onChange(target.value)}
    id="category-select"
    className="mt-2 block w-full rounded-md border-0 p-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-black focus:outline-none "
   >
    {optionsElements}
   </select>
  </div>
 );
}

export default AppSelect;
