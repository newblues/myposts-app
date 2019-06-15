import React, { Component } from 'react';

import { connect } from 'react-redux';

import Message from './Messages';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      value: ''
    };
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        this.props.handleMessages(data);
        this.setState({
          isLoaded: true
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ value: '' });
    this.props.addMessages(this.state.value);
  };

  render() {
    const { messages } = this.props;
    const { isLoaded, value } = this.state;

    const messagesList = messages.map((message, i) => {
      return (
        <Message
          key={i}
          userId={message.userId}
          id={message.id}
          title={message.title}
          body={message.body}
        />
      );
    });

    return (
      <div style={styles.container}>
        <form onSubmit={this.handleSubmit}>
          {' '}
          <label>
            New Message:
            <input
              type='text'
              value={value}
              onChange={this.handleChange}
            />{' '}
          </label>
          <input type='submit' value='Submit' />
        </form>
        {isLoaded ? <div>{messagesList}</div> : <p>En chargement</p>}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleMessages: function(messages) {
      dispatch({
        type: 'GET_MESSAGES',
        messages
      });
    },
    addMessages: function(messages) {
      dispatch({
        type: 'ADD_MESSAGES',
        messages
      });
    }
  };
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);
