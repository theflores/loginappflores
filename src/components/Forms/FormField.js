function FormField({ type, id, fname, onChange, caption, value, error, labelClassName, containerClassName, ...attr}){
  return (
    <section className={containerClassName}>
    <label className={labelClassName}>{caption}</label>
    <input class="placeholder-blue-500 placeholder-opacity-50 md:focus:placeholder-red-600 align-middle m-4 text-center text-base font-serif"
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
