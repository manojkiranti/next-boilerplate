import { FC } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { BsMoon, BsMoonFill } from "react-icons/bs";

import { useTheme } from "next-themes";



const Header:FC = () => {
    
    
    const { theme, setTheme } = useTheme();
    const handleTheme = () => {
        setTheme(theme === 'light'?'dark':'light')
    }
    

    return (
        <>
            <nav className="fixed top-0 right-0 z-30 w-full h-16 transition-all duration-300 shadow-sm xl:pl-72 dark:bg-dark-300 sm:h-20">
                <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8 xl:px-4 2xl:px-12">
                    <div className="flex items-center">
                        <AiOutlineSearch />
                    </div>
                    <div className="block">
                        <div className="relative flex items-center order-last gap-3 shrink-0 sm:gap-6 lg:gap-8" onClick={handleTheme}>
                            <div className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-white text-brand shadow-main transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:border-gray-700 dark:bg-light-dark dark:text-dark sm:h-12 sm:w-12">
                                {/* { (theme === 'light' && theme != undefined) ? <BsMoon />:''} */}
                                {theme !== 'undefined' && (theme === 'dark' ? <BsMoonFill />: <BsMoon />)}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;