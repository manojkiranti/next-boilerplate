import { FC } from "react";

const Button:FC = () => {
    return (
        <>
             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <div className="mx-36">
                            <div className="mb-4">
                                <button className="btn">Default</button>
                            </div>
                            <div className="mb-4">
                                <button className="btn btn-primary">primary</button>
                            </div>
                            <div className="mb-4">
                            <button className="btn btn-secondary">secondary</button>
                            </div>
                            
                            
                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


export default Button;