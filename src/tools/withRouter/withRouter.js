import { useNavigate } from 'react-router-dom';
import React from 'react';
export const withRouter = (Component) => {
  return (props) => {
    const navigate = useNavigate();

    return (
      <Component
        navigate={navigate}
        {...props}
      />
    );
  };
};
