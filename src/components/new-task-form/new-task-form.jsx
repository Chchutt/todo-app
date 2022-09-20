import React from 'react';
import './new-task-form.css';
import PropTypes from 'prop-types';

export class NewTaskForm extends React.Component {
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
      <input
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            return this.onSubmit(e);
          } else {
            return this.onLabelChange;
          }
        }}
        type="text"
        placeholder="What needs to be done?"
        className="new-todo"
        autoFocus
        onChange={this.onLabelChange}
        value={this.state.description}
      />
    );
  }
}

NewTaskForm.propTypes = {
  addItem: PropTypes.func,
};
