import React, { Component } from 'react';
import axios from 'axios';


export class FeedbackForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
    };
  }

  onChange (e) {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit (e) {
    e.preventDefault();
    const { email, message } = this.state;

    axios.post('/feedback', { email, message })
      .then((result) => {
      });
  }

  render() {
    const { email, message } = this.state;
    return (
      <form onSubmit={this.onSubmit.bind(this)}>

        <div className="form-group">
            <label>Your e-mail address:</label>
            <input type="text" className="form-control" name="email" value={email} onChange={this.onChange.bind(this)} />
        </div>
        <div className="form-group">
            <label>Message:</label>
            <textarea className="form-control" name="message" id="message" value={message} onChange={this.onChange.bind(this)}></textarea>
        </div>
        <button type="submit" className="btn btn-success btn-default">Submit</button>
      </form>

    );
  }
}

export default FeedbackForm;