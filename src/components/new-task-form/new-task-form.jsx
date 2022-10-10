import React from 'react';
import './new-task-form.scss';
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
      <React.Fragment>
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
        <input className="new-todo-form__timer" placeholder="Min" autoFocus />
        <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
      </React.Fragment>
    );
  }
}

NewTaskForm.propTypes = {
  addItem: PropTypes.func,
};
