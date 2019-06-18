import React, { Component } from 'react';
import { Button, Form, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

import Message from './Messages';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';
import Loader from './Loader';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '40vw'
  },
  input: {
    width: '40vw',
    height: '100px',
    textAlign: 'top'
  },
  btn: {
    backgroundColor: '#3498db',
    color: 'white'
  }
};

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      alert: '',
      title: '',
      body: ''
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

  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
  };

  handleChangeBody = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      title: '',
      body: ''
    });

    if (this.state.body === '' || this.state.title === '') {
      this.setState({
        alert: 'error'
      });
    } else {
      this.props.addMessages(this.state.title, this.state.body);
      this.setState({
        alert: 'success'
      });
    }
  };

  render() {
    const { messages, filter } = this.props;
    const { isLoaded, title, body } = this.state;

    const messagesList = messages
      // ordering by id
      .sort((a, b) => a.id - b.id)
      // filtering by title
      .filter(name => {
        return name.title.toLowerCase().search(filter.toLowerCase()) !== -1;
      })
      .map((message, i) => {
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
      <div>
        <div style={styles.container}>
          {this.state.alert === 'success' ? <SuccessAlert /> : null}
          {this.state.alert === 'error' ? <ErrorAlert /> : null}
          <Form style={styles.form} onSubmit={this.handleSubmit}>
            {' '}
            <Label>
              <Input
                type='text'
                value={title}
                onChange={this.handleChangeTitle}
                placeholder='Add new title...'
              />{' '}
            </Label>
            <Label>
              <Input
                style={styles.input}
                type='text'
                value={body}
                onChange={this.handleChangeBody}
                placeholder='Add new message...'
              />{' '}
            </Label>
            <Button type='submit' value='Submit' color='info'>
              Submit
            </Button>{' '}
          </Form>
        </div>
        {isLoaded ? (
          <div>{messagesList}</div>
        ) : (
          <div>
            <Loader />
          </div>
        )}
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
    addMessages: function(title, body) {
      dispatch({
        type: 'ADD_MESSAGES',
        title,
        body
      });
    }
  };
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    filter: state.filter
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);
