import FormField from '../../Forms/FormField';
import { MdAdd } from 'react-icons/md';

function NewTodo({ onChange, value, onAddNew}){
  return (
    <section className="TodoAddNew align-middle">
      <section className="flex justify-between items-center my-4 p-2 border align-middle bg-green-800 bg-opacity-50 shadow-md rounded-lg max-w-md mx-auto">
        <FormField
          type="text"
          id="txtNTodo"
          fname="txtNTodo"
          onChange={onChange}
          value={value}
          caption="Nuevo Todo"
          className="flex p-2 m-2 w-5/6 bg-white shadow align-middle"
          labelClassName="flex w-5/6 align-middle"
          containerClassName="flex"
          onKeyUp={(e) => { if (e.keyCode == 13) { onAddNew(e);} }}
        />
        <MdAdd size={"3rem"} onClick={onAddNew}></MdAdd>
      </section>
    </section>
  );
}

export default NewTodo;
