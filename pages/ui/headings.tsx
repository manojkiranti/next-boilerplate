import { FC } from "react";

const Headings:FC = () => {
    return (
        <>
             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h1 className="dark:text-white">h1 Heading</h1>
                        <h2 className="dark:text-white">h2 Heading</h2>
                        <h3 className="dark:text-white">h3 Heading</h3>
                        <h4 className="dark:text-white">h4 Heading</h4>
                        <h5 className="dark:text-white">h5 Heading</h5>
                        <h6 className="dark:text-white">h6 Heading</h6>
                    </div>
                </div>
            </div>
        </>
    )
};


export default Headings;