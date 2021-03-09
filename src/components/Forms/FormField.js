function FormField({ type, id, fname, onChange, caption, value, error, labelClassName, containerClassName, ...attr}){
  return (
    <section className={containerClassName}>
    <label  class="block text-gray-700 text-sm font-bold mb-2" className={labelClassName}>{caption}</label>
    <input class="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-purple-600 bg-gray-200 focus:shadow-outline focus:bg-white"
        type={type}
        id={id}
        name={fname}
        onChange={onChange}
        value={value}
        {...attr}
    />
      {(error && true) ? (<section>{error}</section>):null }
    </section>
  )
}

export default FormField;
