import { AxiosError } from "axios";
import { IconType } from 'react-icons'


export interface IPayload {
  onSuccess?: (data?: any) => void;
  onFailed?: (error: AxiosError) => void;
}

export type NavigationChildrenProps = {
  name: string
  href: string
}

export type NavigationProps = {
  name: string
  icon: IconType
  href: string
  children?: NavigationChildrenProps[]
}