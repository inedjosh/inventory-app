import { useRoutes } from 'react-router-dom';
import { AutheticationRoutes, DashboardRoutes } from './app-routes';

export default function Routes() {
  return useRoutes([DashboardRoutes, AutheticationRoutes]);
}
