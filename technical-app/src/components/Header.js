import React, { Component } from 'react';
import { Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

import { connect } from 'react-redux';

const style = {
  container: {
    height: 50,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 25,
    marginRight: 80
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
    this.props.filterMessages(this.state.filter);
  };

  render() {
    const { messages } = this.props;
    const { filter } = this.state;

    return (
      <div style={style.container}>
        <p>
          <span style={{ color: '#138496' }}>{messages.length}</span> messages
        </p>
        <Input
          type='text'
          value={filter}
          onChange={this.handleChange}
          placeholder='Search for title...'
        />{' '}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filterMessages: function(filter) {
      dispatch({
        type: 'FILTER_MESSAGES',
        filter
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
