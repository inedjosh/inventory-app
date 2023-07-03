import React, { useReducer } from 'react';

const Login = () => {
  const initialState = {
    formData: {
      username: '',
      password: '',
    },
  };
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    initialState
  );
  return (
    <div>
      <p className="font-bold">Login Form</p>
    </div>
  );
};

export default Login;
