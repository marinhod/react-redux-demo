import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e) {
    this.setState({[e.target.name]: [e.target.value]});
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input type="text" name="title" id="title" value={this.state.title} onChange={this.onChange} />
          </div>
          <br />
          <div>
            <label htmlFor="body">Body</label>
            <br />
            <input type="text" name="body" id="body" value={this.state.body} onChange={this.onChange} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

Form.PropTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Form);
