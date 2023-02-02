import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type navItemTypes = {
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}

const NavItem: FC<navItemTypes> = ({ activeItem, setActiveItem, name, route }) => {
    return (activeItem !== name ? (<Link href={route} legacyBehavior>
        <a>
            <span onClick={() => setActiveItem(name)} className="hover:text-green">{name}</span>
        </a>
    </Link>) : null
    )
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('');
    const { pathname } = useRouter();
    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <h1>Header</h1>
        </div>
    )
}

export default Navbar