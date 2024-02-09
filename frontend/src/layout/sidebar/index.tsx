import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import walletLogo from "../../assets/walletlogo.png";
import { NavigationProps } from "../../interfaces/common/common";
import { MenuChildren } from "../menuchildren";

export const navigationItems: NavigationProps[] = [
  {
    name: "Dashboard",
    icon: HiOutlineHome,
    href: "/dashboard",
  },
  // {
  //   name: 'Guides',
  //   icon: AiOutlineInfoCircle,
  //   href: '/guides'
  // },
];

export const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="bg-[#F2F597] w-96">
      <div className={"flex grow flex-col overflow-y-auto border-gray-200"}>
        <div className="mb-8 h-20 flex items-center justify-center">
          <img
            src={walletLogo}
            alt="Zentive Logo"
            className="h-[43px] w-[143px] cursor-pointer"
          />
        </div>
        <nav className="flex-auto space-y-2" aria-label="Sidebar">
          {navigationItems?.map((item, index) => (
            <div className="tracking-widest" key={item?.name}>
              <MenuChildren
                index={index}
                isOpen={index === currentTab}
                item={item}
                setCurrentTab={setCurrentTab}
              />
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
