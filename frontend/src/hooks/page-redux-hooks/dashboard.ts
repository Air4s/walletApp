import { AppState } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { DashboardPageState } from '../../redux/page-redux/dashboard/type';


export const useDashboardPage = (): DashboardPageState => {
  const dashboardState = useSelector((state: AppState) => state.dashboard);
  return dashboardState;
};
  