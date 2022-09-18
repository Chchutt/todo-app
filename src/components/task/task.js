import React from 'react';
import './task.css';
import * as PropType from 'prop-types';

import CreactingTimeForTask from '../creating-time-for-task/creacting-time-for-task';

export default class Task extends React.Component {
  state = {
    view: 'hidden',
    divView: 'view',
    nDescription: '',
  };

  onToggleEdit = () => {
    this.setState(() => {
      return {
        view: 'edit',
      };
    });
    this.setState(() => {
      return {
        divView: 'hidden',
      };
    });
  };

  onToggleView = () => {
    this.setState(() => {
      return {
        view: 'hidden',
      };
    });
    this.setState(() => {
      return {
        divView: 'view',
      };
    });
  };
  onLabelChange = (event) => {
    event.preventDefault();
    this.setState(() => {
      return {
        nDescription: event.target.value,
      };
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.newDescription(this.props.id, this.state.nDescription);
    this.onToggleView();
  };

  boxCheck = () => {};

  render() {
    const { currentDate, id, onToggleActive, onToggleLeft, status, active, description } = this.props;

    let check = true;
    if (!active) {
      check = false;
    }

    return (
      <li className={status} id={id}>
        <div className={this.state.divView}>
          <input className="toggle" type="checkbox" onChange={this.boxCheck} checked={check} onClick={onToggleActive} />
          <label>
            <span className="description">{description}</span>
            <CreactingTimeForTask currentDate={currentDate} />
          </label>
          <button className="icon icon-edit" onClick={() => this.onToggleEdit()} />
          <button className="icon icon-destroy" onClick={onToggleLeft} />
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            id="view"
            type="text"
            className={this.state.view}
            onChange={this.onLabelChange}
            value={this.state.nDescription}
          />
        </form>
      </li>
    );
  }
}

Task.propTypes = {
  newDescription: PropType.func,
  id: PropType.any,
  active: PropType.bool,
  currentDate: PropType.any,
  onToggleActive: PropType.func,
  onToggleLeft: PropType.func,
  status: PropType.string,
  description: PropType.string,
};
