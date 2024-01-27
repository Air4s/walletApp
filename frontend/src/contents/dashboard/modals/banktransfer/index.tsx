import React, { useEffect, useState } from 'react';
import Button from '../../../../components/button';
import Modal from '../../../../components/modal';
import Input from '../../../../components/textbox';
import { useDispatch } from 'react-redux';
import * as actions from '../../../../redux/wallet/action';
import * as pageActions from '../../../../redux/page-redux/dashboard/action';
import toast from 'react-hot-toast';
import { Action } from 'redux';
import { AxiosError } from 'axios';


interface IProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  width?: string;
}

const BankTransferModal: React.FC<IProps> = ({ isOpen, onClose, width = 'sm' }) => {

  const dispatch = useDispatch();

  const [debitAmountState, setDebitAmountState] = useState<string>('');

  useEffect(() => {
    if (!isOpen) {
      setDebitAmountState('');
    }
  }, [isOpen]);

  const onChangeInputAmount = (value: string) => {
    setDebitAmountState(value);
  };

  const onSuccessDebit = () => {
    toast.success('Successful transfer!');
    dispatch(pageActions.displayBankTransferModal(false) as Action);

    dispatch(actions.getWallet({}));
    setDebitAmountState('');
  };

  const onFailedDebit = (error: AxiosError) => {
    toast.error(`Failed transaction: ${error.response?.data}`);
  };

  const onDebit = () => {
    const debitAmountNumber = parseFloat(debitAmountState);

    if (!isNaN(debitAmountNumber)) {
      dispatch(actions.walletDebit({
        debitAmount: debitAmountNumber,
        userId: 1, // The user ID that I have in my db
        onSuccess: onSuccessDebit,
        onFailed: onFailedDebit
      }));
    } else {
      console.error('Invalid debit amount value:', debitAmountState);
      toast.error('Failed to cash in, please try again later');
    }
  };

  const renderModalContent = () : JSX.Element => {

    return (
      <div className='p-5 rounded-xl w-full h-full bg-white text-[#0A1D56]'>
        <div>
          <p className='text-xl font-semibold'> Bank Transfer </p>
        </div>
        <div className='mt-8 text-base font-extralight'>
          <p className='font-semibold'> Transfer from:
            <span className='font-normal'> Airden Gonzaga </span>
          </p>
        </div>
        <div className='mt-8 text-base font-extralight'>
          <p> Enter amount: </p>
        </div>
        <div className='shadow-none mt-4'>
          <Input
            inputType='number'
            value={debitAmountState}
            onChange={(e) => onChangeInputAmount(e.target.value)}
          />
        </div>
        <div className='mt-10 mb-2 flex justify-center'>
          <Button
            variant='secondary'
            customClassName='w-1/3 border-[1px] border-[#0A1D56]'
            onClick={onDebit}
          >
            <span> Save </span> 
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

export default BankTransferModal;