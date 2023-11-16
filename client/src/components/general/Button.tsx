interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
 text: string;
 disabled?: boolean;
}

function Button({ text, disabled = false, ...props }: ButtonProps) {
 return (
  <button
   disabled={disabled}
   className={`bg-black text-white py-2 px-4 border border-black rounded duration-300 
   ${
    !disabled &&
    "hover:scale-105 hover:shadow-md active:text-black active:bg-white"
   }
   disabled:opacity-50`}
   {...props}
  >
   {text}
  </button>
 );
}

export default Button;
