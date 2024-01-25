import { Disclosure, Transition } from '@headlessui/react';
import React from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { NavLink, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { NavigationProps } from '../../interfaces/common/common';
import { path } from '../../utils/path';


type IMenu = {
    index: number
    item: NavigationProps
    isOpen: boolean
    setCurrentTab: React.Dispatch<React.SetStateAction<number>>
}

export const MenuChildren = (props: IMenu) => {
  return (
    <Disclosure as='div' className='space-y-1' defaultOpen={props.isOpen}>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {({ close }) => (
        <>
          <Items
            index={props.index}
            open={props.isOpen}
            item={props.item}
            setCurrentTab={props.setCurrentTab}
          />
          {props.item.children && props.isOpen && (
            <Transition
              show={path(props.item) || props.isOpen}
              appear={true}
              enter='transition-all duration-300 ease-in-out'
              enterFrom='-translate-y-4 opacity-0'
              enterTo='translate-y-0 opacity-100'
              leave='transition-all duration-300 ease-out'
              leaveFrom='translate-y-0 opacity-100'
              leaveTo='-translate-y-4 opacity-0'
            >
              <SubItems
                index={props.index}
                open={props.isOpen}
                item={props.item}
                setCurrentTab={props.setCurrentTab}
              />
            </Transition>
          )}
        </>
      )}
    </Disclosure>
  );
};

type ItemsProps = {
    index: number
    open: boolean
    item: NavigationProps
    setCurrentTab: React.Dispatch<React.SetStateAction<number>>
}

const Items = (props: ItemsProps) => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    if (props.item.name === 'Dashboard'){
      return navigate('/dashboard');
    } else navigate('');
  };
    
  return (
    <Disclosure.Button
      className={twMerge(
        props.item.name === 'Dashboard' ? 'bg-[#0A1D56] text-white' : 'text-[#0A1D56]',
        'w-full hover:font-bold border-2 hover:border-[#0A1D56] group flex items-center pr-5 pl-7 py-3 text-left text-md font-medium shadow-md rounded-md'
      )}
      onClick={goToDashboard}
    >
      <props.item.icon
        className='mr-3 flex-shrink-0 h-6 w-6 group-hover:text-primary'
        aria-hidden='true'
      />

      <span
        className={twMerge(
          props.item.name === 'Dashboard' ? 'bg-[#0A1D56] text-white' : 'text-[#0A1D56]',
        )}
      >
        {props.item.name}
      </span>

      {props.item.children && (props.open || path(props.item)) && props.open ? (
        <HiChevronUp className='text-gray-900 ml-3 flex-shrink-0 h-4 w-4 group-hover:text-primary transition-colors ease-in-out duration-150' />
      ) : (
        props.item.children && (
          <HiChevronDown className='text-gray-900 ml-3 flex-shrink-0 h-4 w-4 group-hover:text-primary transition-colors ease-in-out duration-150' />
        )
      )}
    </Disclosure.Button>
  );
};

const SubItems = (props: ItemsProps) => {
  if (!props.item.children) {
    return null;
  }

  return (
    <Disclosure.Panel className='space-y-1'>
      {props.item.children?.map((subItem) => (
        <NavLink
          key={subItem.name}
          to={subItem.href}
          className={({ isActive }) =>
            twMerge(
              'bg-white text-gray-500 hover:bg-red-50 transition-all duration-300 group w-full flex items-center pl-16 py-2 text-sm font-medium',
              isActive && 'bg-red-50 text-gray-700',
            )
          }
          onClick={() => {
            // dispatch(toggleSidebar({sidebarExpand: false, openPanel: item.name}))
          }}
        >
          <li>{subItem.name}</li>
        </NavLink>
      ))}
    </Disclosure.Panel>
  );
};
