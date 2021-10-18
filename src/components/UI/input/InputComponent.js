import { Fragment } from "react";

const InputComponent = (props) => {
  const { label, type, id, name, placeHolder, value, setValue, requiredStatus = false } = props;
  return (
    <Fragment>
      <label for={name}>{label}*</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeHolder}
        required={requiredStatus}
        value={value}
        onChange={(e) => setValue(e)}
      />
    </Fragment>
  );
};

export default InputComponent;
