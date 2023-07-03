import React, { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = (props: any) => {
  const navigate = useNavigate();
  const initialState = {
    openMobileSideBar: false,
  };
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    initialState
  );
  const { openMobileSideBar } = state;

  useEffect(
    () =>
      // Cleanup method
      () => {
        setState({
          ...initialState,
        });
      },
    []
  );

  return (
    <div>
      <div>Sidebar area</div>
      <div className="dashboard-layout">Main area</div>
    </div>
  );
};

export default DashboardLayout;
