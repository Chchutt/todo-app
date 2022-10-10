import React from 'react';
import './task.css';
import * as PropType from 'prop-types';

import { CreatingTimeForTask } from '../creating-time-for-task/creacting-time-for-task';
// import { Timer } from '../timer';

export class Task extends React.Component {
  IntervalId;
  state = {
    view: 'hidden',
    divView: 'view',
    nDescription: '',
    time: 0,
    counter: 0,
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
    localStorage.setItem('time' + this.props.id, '0');
    this.onToggleView();
  };

  boxCheck = () => {};

  timer = () => {
    if (localStorage.getItem('time' + this.props.id) === null) {
      localStorage.setItem('time' + this.props.id, '0');
    }
    return (this.IntervalId = setInterval(() => {
      let time = localStorage.getItem('time' + this.props.id);
      time++;
      localStorage.setItem('time' + this.props.id, time);
      this.props.counter();
    }, 1000));
  };
  timerShow = () => {
    let total = localStorage.getItem('time' + this.props.id);
    let min;
    let second;
    second = Math.floor(total % 60);
    min = Math.floor(total / 60);

    second = second % 60 < 10 ? '0' + second : second;
    min = min % 60 < 10 ? min : min;
    return min + ':' + second;
  };

  render() {
    const { currentDate, id, onToggleActive, onToggleLeft, status, active, description } = this.props;
    let check = true;
    if (!active) {
      check = false;
    }

    return (
      <li className={status} id={id}>
        <div className={this.state.divView}>
          <input
            className="toggle"
            type="checkbox"
            onChange={this.boxCheck}
            checked={check}
            onClick={() => {
              clearInterval(this.IntervalId);
              return onToggleActive();
            }}
          />
          <label>
            <div>
              <span className="description">{description}</span>
            </div>
            <CreatingTimeForTask currentDate={currentDate} />
          </label>
          <div className={'timer__btn'}>
            <button className="icon icon-play" onClick={this.timer} />
            <button className="icon icon-pause" onClick={() => clearInterval(this.IntervalId)} />
            <span className={'timer__time'}>{this.timerShow()}</span>
          </div>
          <button className="icon icon-edit" onClick={() => this.onToggleEdit()} />
          <button
            className="icon icon-destroy"
            onClick={() => {
              localStorage.removeItem('time' + this.props.id);
              return onToggleLeft();
            }}
          />
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
  id: PropType.number,
  active: PropType.bool,
  currentDate: PropType.instanceOf(Date),
  onToggleActive: PropType.func,
  onToggleLeft: PropType.func,
  status: PropType.string,
  description: PropType.string,
};
