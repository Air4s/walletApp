import { AppState } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { DashboardPageState } from '../../redux/page-redux/dashboard/type';


export const useDashboardPage = (): DashboardPageState => {
  const dashboardPageState = useSelector((state: AppState) => state.dashboard);
  return dashboardPageState;
};
  