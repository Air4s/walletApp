
import { useState } from 'react'
import { HiOutlineUsers } from 'react-icons/hi'
import { HiOutlineHome } from 'react-icons/hi2'
import { useLocation, useNavigate } from 'react-router-dom'
import walletLogo from '../../assets/walletlogo.png'
import { NavigationProps } from '../../interfaces/common/common'
import { MenuChildren } from '../menuchildren'


export const navigationItems : NavigationProps[] = [
    {
        name: 'Dashboard',
        icon: HiOutlineHome,
        href: '/dashboard'
    },
    {
        name: 'Accounts',
        icon: HiOutlineUsers,
        href: '/accounts'
    },
]


export const Sidebar = () => {

    const [currentTab, setCurrentTab] = useState(0)
    const navigate = useNavigate()
    const location = useLocation()


    return (
        <div className='bg-[#F2F597] w-96'>
            <div className={'flex grow flex-col overflow-y-auto border-gray-200'}>
                <div className='mb-8 h-20 flex items-center justify-center'>
                    <img
                      src={walletLogo}
                      alt='Zentive Logo'
                      className='h-[43px] w-[143px] cursor-pointer'
                    />
                </div>
                <nav
                    className='flex-auto space-y-2'
                    aria-label='Sidebar'
                >
                    {navigationItems?.map((item, index) => (
                        <div className='tracking-widest' key={item?.name}>
                            <MenuChildren
                                index={index}
                                isOpen={index === currentTab}
                                item={item}
                                setCurrentTab={setCurrentTab}
                            />
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    )
}