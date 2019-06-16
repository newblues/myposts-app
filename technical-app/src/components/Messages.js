import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    display: 'flex',
    width: '50%',
    padding: '15px',
    borderTop: '1px solid #DFDFDF',
    borderRight: '1px solid #DFDFDF',
    borderLeft: '1px solid #DFDFDF',
    backgroundColor: 'white'
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%'
  },
  content: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '15px'
  }
};

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, body } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.icon}>
            <FaEnvelope size='2em' />
          </div>
          <div style={styles.content}>
            <h6>{title}</h6>
            <p>{body}</p>
          </div>
        </div>
      </div>
    );
  }
}
