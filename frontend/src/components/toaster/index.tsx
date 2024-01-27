import React from 'react';
import toast, { ToastBar, Toaster, Toast, ToastPosition, DefaultToastOptions } from 'react-hot-toast';
import { AiOutlineCloseCircle } from 'react-icons/ai';


interface ToasterProps {
  position?: ToastPosition;
  toastOptions?: DefaultToastOptions;
  reverseOrder?: boolean;
  gutter?: number;
  containerStyle?: React.CSSProperties;
  containerClassName?: string;
  children?: (toast: Toast) => JSX.Element;
}


const ToasterNotification = (Props: ToasterProps) => {
  return (
    <>
      <Toaster
        { ...Props}
      >
        {(toaster) => (
          <ToastBar toast={toaster}  position={Props.position} >
            {({ icon, message }) => (
              <div className="p-2 w-full flex justify-between">

                <div className="flex">
                  {icon}
                  <span className="text-base ml-2 font-light tracking-wide">
                    {message}
                  </span>
                </div>

                <div className="">
                  {toaster.type !== 'loading' && (
                    <button onClick={() => toast.dismiss(toaster.id)}> 
                      <AiOutlineCloseCircle className={'h-6 w-6 mt-1 ' + (toaster.type === 'success' ? 'text-[#0A1D56]' : toaster.type === 'error' ? 'text-red-600' : '' )} />
                    </button>
                  )}
                </div>

              </div>
            )}
          </ToastBar>
        )}
      </Toaster>
    </>
  );
};

export default ToasterNotification;
