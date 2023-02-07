import { FC } from 'react';
import { BsCodeSlash } from 'react-icons/bs';
const Paragraph: FC = () => {
    return (

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="dark:text-white">Paragraph Normal</h4>
                        <p className="text-muted dark:text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <div className="collapse">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title">
                                <BsCodeSlash />
                            </div>
                            <div className="peer-checked:border collapse-content">
                                {"<p class='text-muted'>....</p>"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="dark:text-white">Paragraph Small</h4>
                        <p className="text-sm text-muted dark:text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <div className="collapse">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title">
                                <BsCodeSlash />
                            </div>
                            <div className="peer-checked:border collapse-content">
                                {"<p class='text-sm text-muted'>....</p>"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Paragraph