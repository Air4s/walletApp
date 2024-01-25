import { AxiosError } from 'axios';
import { IconType } from 'react-icons';


export interface IPayload {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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