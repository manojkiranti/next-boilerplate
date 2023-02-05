import { FC, useState, useEffect } from "react";
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { IconType } from "react-icons";

type MenuItemProps = {
  name?: string;
  Icon: IconType;
  href: string;
  dropdownItems?: DropdownItemProps[];
}

type DropdownItemProps = {
  name: string;
  href: string;
};

const MenuItem: FC<MenuItemProps> = ({ name, Icon, href, dropdownItems }) => {
  let [isOpen, setIsOpen] = useState(false);
  let { pathname } = useRouter();

  let isChildrenActive =
    dropdownItems && dropdownItems.some((item) => item.href === pathname);

  useEffect(() => {
    if (isChildrenActive) {
      setIsOpen(true);
    }
  }, []);

  return (
    <>
      <NextLink
        href={href}
        className="relative flex items-center h-12 px-4 text-sm text-gray-500 transition-all rounded-lg whitespace-nowrap hover:text-brand dark:hover:text-white dark:text-white"
      >

        <span className="relative z-[1] mr-3"><Icon /></span>
        <span className="relative z-[1]"> {name}</span>

        {href === pathname && (
          <motion.span
            className="absolute bottom-0 left-0 right-0 w-full h-full rounded-lg bg-brand shadow-large"
            layoutId="menu-item-active-indicator"
          />
        )}

      </NextLink>
    </>
  )
}
export default MenuItem;