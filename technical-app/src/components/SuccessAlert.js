import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const SuccessAlert = () => {
  // const [visible, setToggle] = useState(true);

  return (
    <Alert
      color='success'
      // isOpen={visible}
      // toggle={() => setToggle(visible === false)}
    >
      Succes : Your message was successfully sent!
    </Alert>
  );
};

export default SuccessAlert;
