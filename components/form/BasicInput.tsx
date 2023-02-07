import { FC, ReactNode } from "react";

type BasicInputType =  {
    CodeIcon: ReactNode
}
const BasicInput: FC<BasicInputType> = ({CodeIcon}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="mb-3 dark:text-white">Basic Input</h4>
                <div className="form-control">
                    <label htmlFor="without_border" className="label">Without Border</label>
                    <input type="text" placeholder="Type here" className="w-full input" />
                </div>

                <div className="form-control">
                    <label htmlFor="with_border" className="label">With Border</label>
                    <input type="text" placeholder="Type here" className="w-full input input-bordered" />
                </div>

                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title">
                       {CodeIcon}
                    </div>
                    <div className="peer-checked:border collapse-content">
                        {"<label htmlFor='without_border' className='label'>Without Border</label>"}
                        <div>{"<input type='text' placeholder='Type here' className='w-full input' />"}</div>
                        <br />
                        {"<label htmlFor='with_border' className='label'>With Border</label>"}
                        <div>{"<input type='text' placeholder='Type here' className='w-full input input-bordered' />"}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicInput;