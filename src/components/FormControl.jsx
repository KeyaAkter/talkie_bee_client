const FormControl = ({
  label,
  labelInnerText,
  inputType,
  placeholder,
  formFields,
  setFormFields,
}) => {
  return (
    <div className="form-control flex flex-col gap-2 cursor-pointer">
      <label htmlFor={label}>{labelInnerText}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        id={label}
        value={formFields[label]}
        onChange={(e) =>
          setFormFields({ ...formFields, [label]: e.target.value })
        }
        className="border rounded  py-3 px-5 w-[25rem] outline-none hover:border-emerald-500"
      />
    </div>
  );
};

export default FormControl;
