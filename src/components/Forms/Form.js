function Form({children}){
  return (
    <form className="flex flex-col my-36 p-8 space-y-4 max-w-md mx-auto font-sans text-lg align-middle bg-green-800 bg-opacity-30 shadow-md rounded-lg">
        {children}        
    </form>
  );
}

export default Form;
