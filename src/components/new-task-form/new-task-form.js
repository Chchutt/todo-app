import React from 'react';
import './new-task-form.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends React.Component {
  state = {
    description: '',
  };

  onLabelChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.description);
    this.setState({
      description: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          className="new-todo"
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.description}
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  addItem: PropTypes.func,
};
