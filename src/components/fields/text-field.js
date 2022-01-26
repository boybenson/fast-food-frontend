import React, { Fragment } from "react";

const TextField = ({
  type,
  placeholder,
  name,
  onBlur,
  value,
  onChange,
  touched,
  errors,
  className,
}) => {
  return (
    <div>
      <input
        type={type ?? "text"}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder ?? name}
        className={
          className ?? "border border-gray-600 w-full py-2 px-4 rounded-md"
        }
      />
      {touched[name] && errors[name] ? (
        <p className="text-red-400">{errors[name]}</p>
      ) : null}
    </div>
  );
};

export default TextField;
