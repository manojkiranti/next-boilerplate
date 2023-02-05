
import { FC, ReactNode, useEffect } from "react";

import Sidebar from "./_sidebar";
import Header from "./_header";

interface LayoutPropsType {
    children: ReactNode
}

const Layout:FC<LayoutPropsType> =  ({ children }) => {



    return (
       <div className="min-h-screen px-10 md:pl-80">
            <Header />
            <Sidebar />
            <main className="min-h-[100vh] px-8 pt-32 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8 xl:pb-24">
                { children }
            </main>            
       </div>
    )
}

export default Layout;