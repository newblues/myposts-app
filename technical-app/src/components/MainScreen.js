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
      isLoaded: false
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

  render() {
    const { messages } = this.props;
    const { isLoaded } = this.state;

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
