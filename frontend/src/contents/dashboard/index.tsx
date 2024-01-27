import React, { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { CiWallet, CiBitcoin, CiMoneyBill, CiBank, CiInboxIn, CiGift } from 'react-icons/ci';
import { BsGraphUpArrow } from 'react-icons/bs';
import Tooltip from '../../components/tooltip';
import Button from '../../components/button';
import CashInModal from './modals/cashin';
import { useDispatch } from 'react-redux';
import { useDashboardPage } from '../../hooks/page-redux-hooks/dashboard';
import * as actions from '../../redux/wallet/action';
import * as pageActions from '../../redux/page-redux/dashboard/action';
import { Action } from 'redux';
import BankTransferModal from './modals/banktransfer';
import { useDashboard } from '../../hooks/redux-hooks/dashboard';
import toast from 'react-hot-toast';


interface IconInfo {
  icon: React.ReactNode;
  tooltipText: string;
}

const Dashboard = () => {

  const headingContainerClass = 'bg-white h-32 border border-[1px] border-[#0A1D56] rounded-2xl shadow-lg';
  const headingTitleClass = 'mt-3 ml-3 text-xl text-[#0A1D56] font-bold tracking-wider';
  const iconContainerClass = 'h-8 w-8 hover:bg-gray-300 hover:opacity-50 rounded-lg';
  const iconClass = 'h-full w-full';

  const iconItems: IconInfo[] = [
    { icon: <CiWallet className={iconClass} />, tooltipText: 'Savings' },
    { icon: <CiBitcoin className={iconClass} />, tooltipText: 'Crypto' },
    { icon: <CiBank className={iconClass} />, tooltipText: 'Bank Transfer' },
    { icon: <CiMoneyBill className={iconClass} />, tooltipText: 'Cash In' },
    { icon: <CiInboxIn className={iconClass} />, tooltipText: 'This is a tooltip' },
    { icon: <CiGift className={iconClass} />, tooltipText: 'Rewards' },
    { icon: <BsGraphUpArrow className='h-4/5 w-4/5 mt-1.5' />, tooltipText: 'Stock Market' },
  ];

  const dispatch = useDispatch();

  const { isCashInModalOpen, isBankTransferModalOpen } = useDashboardPage();
  const { getWallet } = useDashboard();

  const userDetails = getWallet.data;

  const onSuccessGet = () => {
    ()=> console.log('get user balance success'); // For dev purposes
  };
  const onFailedGet = () => {
    toast.error('Error getting user balance, please try again later');
  };

  useEffect(() => {
    dispatch(actions.getWallet({
      onSuccess: onSuccessGet,
      onFailed: onFailedGet
    }));
  }, [dispatch]);

  const onOpenCashIn = () => {
    dispatch(pageActions.displayCashInModal(true) as Action);
  };

  const onOpenBankTransfer = (tooltipText: string) => {
    if (tooltipText === 'Bank Transfer') {
      dispatch(pageActions.displayBankTransferModal(true) as Action);
    }
    return;
  };

  return (
    <>
      <div className="h-full overflow-y-hidden">
        <div className="h-screen">
          <div className='flex mt-8 mx-8 space-x-4'>

            <div className={twMerge(headingContainerClass, 'w-1/3')}>
              <p className={twMerge(headingTitleClass)}> My Wallet </p>

              <div className='flex'>

                <div className='w-3/4'>
                  <p className={twMerge(headingTitleClass, 'h-16 text-2xl')}>
                  ₱{userDetails?.balance?.toLocaleString() || ' ----'}
                  </p>
                </div>

                <div className='mb-2 mr-3 w-2/5 flex justify-center items-center'>
                  <Button
                    variant='secondary'
                    onClick={onOpenCashIn}
                    customClassName='w-full border-[1px] border-[#0A1D56]'
                  >
                    <span className='text-lg font-bold'> + </span>
                  </Button>
                </div>

              </div>
            </div>

            <div className={twMerge(headingContainerClass, 'w-2/3')}>
              <p className={twMerge(headingTitleClass)}> Your Assets </p>
              <p className={twMerge(headingTitleClass, 'h-16')}>
                <div className='flex space-x-4'>
                  {iconItems.map((iconInfo, index: number) => (
                    <div key={index} className={twMerge(iconContainerClass)}>
                      <button
                        className={twMerge(
                          iconInfo.tooltipText === 'Bank Transfer'
                            ? 'border-[1px] border-[#0A1D56] rounded-lg'
                            : '',
                          'w-full h-full'
                        )}
                        onClick={()=> onOpenBankTransfer(iconInfo.tooltipText)}
                      >
                        <Tooltip tooltipText={iconInfo.tooltipText} position='bottom'>
                          {iconInfo.icon}
                        </Tooltip>
                      </button>
                    </div>
                  ))}
                </div>
              </p>
            </div>

          </div>
        </div>
      </div>
      <CashInModal 
        isOpen={isCashInModalOpen}
        onClose={()=> dispatch(pageActions.displayCashInModal(false) as Action)}
      />
      <BankTransferModal 
        isOpen={isBankTransferModalOpen}
        onClose={()=> dispatch(pageActions.displayBankTransferModal(false) as Action)}
      />
    </>
  );
};

export default Dashboard;