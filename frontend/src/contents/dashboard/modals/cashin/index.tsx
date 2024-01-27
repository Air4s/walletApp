import React from 'react';
import Button from '../../../../components/button';
import Modal from '../../../../components/modal';
import Input from '../../../../components/textbox';


interface IProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  width?: string;
}

const CashInModal: React.FC<IProps> = ({ isOpen, onClose, width = 'sm' }) => {

  const renderModalContent = () : JSX.Element => {

    return (
      <div className='p-5 rounded-xl w-full h-full bg-white text-[#0A1D56]'>
        <div>
          <p className='text-xl font-semibold'> Cash In</p>
        </div>
        <div className='mt-8 text-base font-extralight'>
          <p> Enter your desired amount: </p>
        </div>
        <div className='shadow-none mt-4'>
          <Input inputType='number' />
        </div>
        <div className='mt-10 mb-2 flex justify-center'>
          <Button
            variant='secondary'
            customClassName='w-1/3 border-[1px] border-[#0A1D56]'
            onClick={()=> console.log('ya')}
          >
            <span> Save </span> 
            {/* { isAdding && <Spinner /> } */}
          </Button>
        </div>  
      </div>
    );
  };

  return (
    <Modal {...{ open: isOpen, onClose, width}} close>
      {renderModalContent()}
    </Modal>
  );
};

export default CashInModal;