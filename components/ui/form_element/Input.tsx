import React from "react";
import { FieldValues, Path, DeepMap, FieldError } from "react-hook-form";

interface InputPropsType extends React.InputHTMLAttributes<HTMLInputElement>{
    inputName: string;
    labelText: string;
    errors: string | undefined;
    fullWidth?: boolean
}



const Input = React.forwardRef<HTMLInputElement, InputPropsType> (({ inputName, labelText, errors, fullWidth = true, ...props }, ref) =>{
    return (
        <div className="form-control">
            <label htmlFor={inputName} className={`label  ${errors? 'error' : ''} `}>{labelText}</label>
            <input  className={`w-full input input-bordered ${errors ? 'error' : ''}`} aria-invalid={errors ? "true" : "false"}  ref={ref} {...props} />
            {errors && <div className="mt-1 text-sm font-light text-red-800"> {errors}</div>}
        </div>
    )
})


export default Input;