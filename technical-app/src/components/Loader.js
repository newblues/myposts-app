import React from 'react';
import { Spinner } from 'reactstrap';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const Loader = () => {
  return (
    <div style={styles.container}>
      <Spinner style={{ width: '3rem', height: '3rem' }} color='info' />
      <p>Loading messages...</p>
    </div>
  );
};

export default Loader;
