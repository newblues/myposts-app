import React from 'react';
import { Alert } from 'reactstrap';

const ErrorAlert = () => {
  return (
    <div>
      <Alert color='danger'>Error: All fields are required!</Alert>{' '}
    </div>
  );
};

export default ErrorAlert;
