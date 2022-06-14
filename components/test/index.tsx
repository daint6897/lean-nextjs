import React from "react";

export function Form({ defaultValues, children, register }: any) {

  return (
    <div>
      {Array.isArray(children)
        ? children.map((child) => {
          return child.props.name
            ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                key: child.props.name
              }
            })
            : child;
        })
        : children}
    </div>
  );
}

export const Input =  React.memo(function Input({ register, name, onBlur }: any) {
  const handleBlur = () => {
    if (typeof onBlur === "function") {
      onBlur()
    }
  }
  // console.log("input rrr");
  
  return <input {...register(name)} onBlur={handleBlur} />;
})

// export 

export function Select({ register, options, name, ...rest }: any) {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value: any) => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
}
