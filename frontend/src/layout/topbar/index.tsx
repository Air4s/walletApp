import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiChevronDown, FiLogOut } from 'react-icons/fi';
import { GoArrowSwitch } from 'react-icons/go';
import { IoChevronForwardOutline } from 'react-icons/io5';


const TopBar = () => {

  return (
    <div className='h-20 px-8 bg-[#3ba6a6] text-[#0A1D56]'>
      <div className='h-full flex flex-1 justify-between self-stretch gap-x-4 lg:gap-x-6'>
        <div className='mt-4 font-bold text-2xl'> Account Overview </div>
        <div className='flex items-center gap-x-2 lg:gap-x-4 bg-white border-[1px] border-[#0A1D56] hover:bg-gray-50 rounded-lg shadow-lg'>

          <Popover as='div' className='my-3 mx-3'>
            <Popover.Button className='max-w-xs flex items-center text-sm focus:outline-none'>
              <BsPerson className='w-7 h-7 mr-5' />
              <div className='inline-flex gap-2 justify-center items-center'>
                <div>
                  <p className='font-semibold'>
                    Airden G.
                  </p>
                  <p className='mt-1 text-[#0A1D56] text-xs capitalize'>
                    User
                  </p>
                </div>
                <FiChevronDown className='w-5 h-5' />
              </div>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Popover.Panel className='z-10 origin-top-right absolute right-4 top-16 w-[227px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='flex font-[400] flex-col'>
                  <button
                    onClick={() => null}
                    type='button'
                    className='border-b-2 border-[#F5F5F5]'
                  >
                    <div className='p-3 flex items-center cursor-pointer text-[14px] rounded-t-md hover:bg-[#F5F5F5] hover:text-black hover:font-semibold transition-all'>
                      <BsPerson className='mr-3 w-6 h-6' />
                      <p className='text-[#0A1D56]'> My Profile </p>
                    </div>
                  </button>

                  <button
                    onClick={() => null}
                    type='button'
                    className='border-b-2 border-[#F5F5F5]'
                  >
                    <div className='p-3 flex items-center cursor-pointer text-[14px] hover:bg-[#F5F5F5] hover:text-black hover:font-semibold transition-all'>
                      <GoArrowSwitch className='mr-3 w-6 h-6' />
                      <div className='flex-1 text-left'>
                        <p className='text-[#0A1D56]'> More Settings </p>
                      </div>
                      <IoChevronForwardOutline className=' w-5 h-5' />
                    </div>
                  </button>

                  <button onClick={() => null} type='button' className='mt-8'>
                    <div className='p-3 flex items-center cursor-pointer text-[14px] rounded-b-md bg-[#F5F5F5] hover:bg-gray-300 hover:text-black hover:font-semibold transition-all'>
                      <FiLogOut className='mr-3 w-5 h-5' />
                      <p className='text-[#0A1D56]'> Log out </p>
                    </div>
                  </button>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
