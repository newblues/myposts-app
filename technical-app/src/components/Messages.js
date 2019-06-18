import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

import { FaEnvelope, FaTrashAlt } from 'react-icons/fa';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    display: 'flex',
    width: '80%',
    padding: '15px',
    border: '1px solid #DFDFDF',
    backgroundColor: 'white'
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    color: '#138496'
  },
  trash: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    color: '#138496',
    cursor: 'pointer'
  },
  content: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '15px'
  }
};

class Messages extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handeClickDelete = id => {
    this.props.handleClickDelete(id);
  };

  render() {
    const { title, body, id } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.icon}>
            <FaEnvelope size='1.5em' />
          </div>
          <div style={styles.content}>
            <h6>{title}</h6>
            <p>{body}</p>
          </div>
          <div style={styles.trash}>
            <FaTrashAlt
              onClick={() => this.handeClickDelete(id)}
              size='1.5em'
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleClickDelete: function(id) {
      dispatch({
        type: 'DELETE_MESSAGES',
        id
      });
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Messages);
