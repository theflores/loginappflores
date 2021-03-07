function FormAction({caption, onClick}){
  let myClasses = [
    "transition",
    "duration-500",
    "ease-in-out",
    "bg-center",
    "justify-center",
    "border-none",
    "border-transparent",
    "text-base",
    "font-medium",
    "rounded",
    "text-white",
    "bg-blue-600",
    "hover:bg-red-600",
    "transform hover:-translate-y-1",
    "hover:scale-110",
    "md:py-4",
    "md:text-lg",
    "md:px-10"
  ];
  return(
    <button
      onClick={onClick}
      className={myClasses.join(" ")}
    >
      {caption}
    </button>
  );
}

export default FormAction;
