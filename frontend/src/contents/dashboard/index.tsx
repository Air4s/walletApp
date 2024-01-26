import React from 'react';
import { twMerge } from 'tailwind-merge';
import { CiWallet, CiBitcoin, CiMoneyBill, CiBank, CiInboxIn, CiGift } from 'react-icons/ci';
import Tooltip from '../../components/tooltip';


const Dashboard = () => {

  const headingContainerClass = 'bg-white h-32 border border-[1px] border-[#0A1D56] rounded-2xl shadow-lg';
  const headingTitleClass = 'mt-3 ml-3 text-[#0A1D56] font-bold tracking-wider';
  const iconContainerClass = 'h-8 w-8 hover:bg-gray-300 hover:opacity-50 rounded-lg';

  const sampleDynamicVal = 16006064;

  // https://dribbble.com/shots/15270128-Crypto-Wallet-UI-design //
  // link for color palette: https://colorhunt.co/palette/0a1d56492e8737b5b6f2f597 

  return (
    <div className="h-full overflow-y-hidden ">
      <div className="h-screen">

        <div className='flex mt-8 mx-8 space-x-4'>
          <div className={twMerge(headingContainerClass, 'w-1/3')}>
            <p className={twMerge(headingTitleClass)}> My Wallet </p>
            <p className={twMerge(headingTitleClass, 'h-16 text-2xl')}>
              ₱{sampleDynamicVal.toLocaleString()}
            </p>
          </div>

          <div className={twMerge(headingContainerClass, 'w-2/3')}>
            <p className={twMerge(headingTitleClass)}> Other stuff </p>
            <p className={twMerge(headingTitleClass, 'h-16')}>
              <div className='flex space-x-4'>
                <div className={twMerge(iconContainerClass)}>
                  <Tooltip tooltipText="Savings" position='bottom'>
                    <CiWallet className='h-full w-full'/>
                  </Tooltip>
                </div>
                <div className={twMerge(iconContainerClass)}>
                  <Tooltip tooltipText="Crypto" position='bottom'>
                    <CiBitcoin className='h-full w-full'/>
                  </Tooltip>
                </div>
                <div className={twMerge(iconContainerClass)}>
                  <Tooltip tooltipText="Bank Transfer" position='bottom'>
                    <CiBank className='h-full w-full'/>
                  </Tooltip>
                </div>
                <div className={twMerge(iconContainerClass)}>
                  <Tooltip tooltipText="Cash In" position='bottom'>
                    <CiMoneyBill  className='h-full w-full'/>
                  </Tooltip>
                </div>
                <div className={twMerge(iconContainerClass)}>
                  <Tooltip tooltipText="This is a tooltip" position='bottom'>
                    <CiInboxIn className='h-full w-full'/>
                  </Tooltip>
                </div>
                <div className={twMerge(iconContainerClass)}>
                  <Tooltip tooltipText="Rewards" position='bottom'>
                    <CiGift className='h-full w-full'/>
                  </Tooltip>
                </div>
              </div>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;