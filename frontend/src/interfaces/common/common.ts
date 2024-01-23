import { AxiosError } from "axios";


export interface IPayload {
    onSuccess?: (data?: any) => void;
    onFailed?: (error: AxiosError) => void;
  }