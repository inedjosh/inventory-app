import React, { useEffect, useReducer } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { authBg } from '../../assets';

const AuthLayout = (props: any) => {
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
    <div className="grid md:grid-cols-2 h-screen">
      <div
        className="hidden md:block relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(202, 22, 17, 0.74), rgba(202, 22, 17, 0.74)), url(${authBg}) `,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="ml-10 mt-8 relative text-white">NICE AND COOL</div>
      </div>
      <div className="h-full overflow-auto px-4 flex md:items-center ">
        <div className="max-w-md w-full mr-auto ml-auto mt-20 mb-10 md:mt-20 md:mb-12 md:ml-12 md:mr-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
