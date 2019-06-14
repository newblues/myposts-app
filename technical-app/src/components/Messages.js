import React from 'react';

import { connect } from 'react-redux';

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, body } = this.props;

    return (
      <div>
        <h1>{title} </h1>
        <p>{body}</p>
      </div>
    );
  }
}
