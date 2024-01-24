
import { useLocation } from 'react-router'
import { NavigationProps } from '../interfaces/common/common'


export const path = (item: NavigationProps) => {
    if (item.children) {
        return item.children.find((o) => o.href === useLocation().pathname) ? true : false
    }
    return
}