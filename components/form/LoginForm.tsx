import { FC, ReactNode } from "react";

// form
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//components
import Input from "../ui/form_element/Input";

type LoginFormType = {
    CodeIcon: ReactNode
}

type FormValues = {
    username: string;
    password: string;
};

const schemaResolver = yupResolver(
    yup.object().shape({
        username: yup.string().required("Please enter user id"),
        password: yup.string().required("Please enter Password")
    })
);

const LoginForm:FC<LoginFormType> = ({CodeIcon}) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: schemaResolver,
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const onSubmit:SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }
    
    return (
         <div className="card">
            <div className="card-body">
                <h4 className="mb-3 dark:text-white">Login Form With Validation</h4>
                <form onSubmit={handleSubmit(onSubmit)}>                    
                    <Input inputName="username" errors={errors.username?.message} labelText="Username" {...register("username")}  />
                    <Input inputName="password" errors={errors.password?.message} labelText="Password" {...register("password")}  />                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title">
                       {CodeIcon}
                    </div>
                    <div className="peer-checked:border collapse-content">
                        {"<Input inputName='username' errors={errors.username?.message} labelText='Username' {...register('username')}  />"}
                        <div>{"<Input inputName='password' errors={errors.password?.message} labelText='Password' {...register('password')}  /> "} </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;