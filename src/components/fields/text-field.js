import React from "react";

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
  disabled,
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
        disabled={disabled ?? false}
      />
      {touched[name] && errors[name] ? (
        <p className="text-red-400">{errors[name]}</p>
      ) : null}
    </div>
  );
};

export default TextField;
