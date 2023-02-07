import { FC } from "react";

import { BsCodeSlash } from 'react-icons/bs';

const Button: FC = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <div className="mx-3">
                            <div className="mb-4">
                                <button className="btn">Default</button>
                            </div>
                            <div className="mb-4">
                                <button className="btn btn-primary">primary</button>
                            </div>
                            <div className="mb-4">
                                <button className="btn btn-secondary">secondary</button>
                            </div>

                            <div className="collapse">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title">
                                    <BsCodeSlash />
                                </div>
                                <div className="peer-checked:border collapse-content">
                                    {"<button class='btn'>....</button>"}

                                    <div>{"<button class='btn btn-primary'>....</button>"}</div>
                                    {"<button class='btn btn-secondary'>....</button>"}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


export default Button;