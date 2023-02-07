import { FC } from "react";

import { BsCodeSlash } from 'react-icons/bs';

import BasicInput from "@/components/form/BasicInput";
import LoginForm from "@/components/form/LoginForm";

const Forms: FC = () => {

    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <BasicInput CodeIcon={ <BsCodeSlash /> } />
                </div>
                <div>
                    <LoginForm CodeIcon={ <BsCodeSlash /> } />
                </div>
            </div>

        </>
    )
}

export default Forms;