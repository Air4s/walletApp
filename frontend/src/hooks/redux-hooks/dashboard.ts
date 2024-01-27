import { AppState } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { WalletState } from '../../redux/wallet/type';


export const useDashboard = (): WalletState => {
  const walletState = useSelector((state: AppState) => state.wallet);
  return walletState;
};