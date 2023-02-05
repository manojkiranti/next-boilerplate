import { FC, useEffect } from "react";


const Forms: FC = () => {

    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <div className="form-control">
                            <label htmlFor="without_border" className="label">Without Border</label>
                            <input type="text" placeholder="Type here" className="w-full input" />
                        </div>

                        <div className="form-control">
                            <label htmlFor="with_border" className="label">With Border</label>
                            <input type="text" placeholder="Type here" className="w-full input input-bordered" />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Forms;