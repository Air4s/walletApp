import { END_POINTS } from '../constants/end-point';
import mainApi from '../constants/url';
// import { IGetWalletResponse } from '../interfaces/wallet';
// import { AxiosResponse } from 'axios';


export const walletRequests = {
  
  getWalletApi: () => { // Promise<AxiosResponse<IGetWalletResponse>>
    return mainApi.get(`${END_POINTS.WALLET}/balance`);
  },
};



