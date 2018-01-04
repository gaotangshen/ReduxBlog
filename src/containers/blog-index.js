import React, { Component } from 'react';
import { connect } from 'react-redux';
import { feachPosts } from '../actions';

class BlogIndex extends Component {
  componentDidMount() {
    this.props.feachPosts();
  }

  render() {
    return (
      <div>
        blog index
      </div>
    );
  }
}

export default connect(null, { feachPosts })(BlogIndex); // shortcut of mapDispachToProps.