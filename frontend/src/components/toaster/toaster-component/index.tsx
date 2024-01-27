import React from 'react';
import { FiTrash } from 'react-icons/fi';
import ToasterNotification from '..';


const Toaster = () => {
  return (
    <>
      <ToasterNotification
        position='bottom-right'
        reverseOrder={true}
        toastOptions={{
          duration: 5000,
          success: {
            style: {
              background: '#FFFFFF',
              width: 'auto',  // 313px
              height: 'auto', // 56px
              borderRadius: '5px'
            },
            iconTheme: {
              primary: '#15763E',
              secondary: '#FFFFFF',
            },
          },
          error: {
            style: {
              background: '#FFFFFF',
              width: '313px',
              height: '56px',
              borderRadius: '5px'
            },
            iconTheme: {
              primary: '#E32300',
              secondary: '#FFFFFF',
            },
          },
          blank: {  // not sure if this is needed, to confirm (delete)
            style: {
              background: '#E8E8E8',
            },
            icon: <FiTrash  className='h-5 w-5'/>
          }
        }}
      />
    </>
  );
};

export default Toaster;