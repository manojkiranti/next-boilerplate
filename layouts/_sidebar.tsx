import { FC } from "react";

import Scrollbar from "@/components/ui/scrollbar";
import MenuItem from "@/components/ui/menuItem";

import { menuItems } from "@/data";


const Sidebar: FC = () => {
    return (
        <aside className="top-0 left-0 z-40 w-full h-full max-w-full border-r border-gray-200 border-dashed bg-body dark:border-gray-700 dark:bg-dark xs:w-80 xl:fixed xl:w-72 2xl:w-80">
            <div className="relative flex items-center justify-between h-24 px-6 py-4 overflow-hidden 2xl:px-8">
                <h3 className="dark:text-white">N - Theme</h3>
            </div>
            <Scrollbar style={{ height: 'calc(100% - 96px)' }}>
                <div className="px-6 pb-5 2xl:px-8">
                    <div className="mt-12">
                        {menuItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                name={item.name}
                                href={item.href}
                                Icon={item.icon}
                                // dropdownItems={item.dropdownItems}
                            />
                        ))}
                    </div>
                </div>
            </Scrollbar>
        </aside>
    )
}

export default Sidebar;