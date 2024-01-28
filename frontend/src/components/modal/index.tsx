import React, { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';


interface IProps {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  width?: string;
  close?: boolean;
  children: React.ReactNode;
  className?: string;
  btnColor?: string;
}

const Modal: React.FC<IProps> = ({ open, onClose, className, width, close, children }) => {
  const cancelButtonRef = useRef(null);

  const maxWidthClass = width ? `max-w-${width}` : 'max-w-sm';

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto md:overflow-hidden no-scrollbar md:m-4 lg:overflow-y-auto lg:m-0"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="-ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={`w-full inline-block align-bottom rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle m-auto ${className} ${maxWidthClass}`}
            >
              {close && (
                <div className="block absolute top-2 right-2 pt-4 pr-4">
                  <button onClick={() => onClose(false)}>
                    <AiOutlineCloseCircle
                      className={twMerge('h-7 w-7 text-[#0A1D56]')}
                    />
                  </button>
                </div>
              )}
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
