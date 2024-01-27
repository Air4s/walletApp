import React from 'react';
import { twMerge } from 'tailwind-merge';
import { CiWallet, CiBitcoin, CiMoneyBill, CiBank, CiInboxIn, CiGift } from 'react-icons/ci';
import { BsGraphUpArrow } from 'react-icons/bs';
import Tooltip from '../../components/tooltip';
import Button from '../../components/button';
import CashInModal from './modals/cashin';
import { useDispatch } from 'react-redux';
import { useDashboardPage } from '../../hooks/page-redux-hooks/dashboard';
import * as pageActions from '../../redux/page-redux/dashboard/action';
import { Action } from 'redux';


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

  const { isCashInModalOpen } = useDashboardPage();

  const sampleDynamicVal = 16006064;

  const onOpenCashIn = () => {
    dispatch(pageActions.displayCashInModal(true) as Action);
  };

  return (
    <>
      <div className="h-full overflow-y-hidden ">
        <div className="h-screen">
          <div className='flex mt-8 mx-8 space-x-4'>

            <div className={twMerge(headingContainerClass, 'w-1/3')}>
              <p className={twMerge(headingTitleClass)}> My Wallet </p>

              <div className='flex'>

                <div className='w-3/4'>
                  <p className={twMerge(headingTitleClass, 'h-16 text-2xl')}>
                  ₱{sampleDynamicVal.toLocaleString()}
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
                      <Tooltip tooltipText={iconInfo.tooltipText} position='bottom'>
                        {iconInfo.icon}
                      </Tooltip>
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
    </>
  );
};

export default Dashboard;