import './creating-time-for-task.css';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import React from 'react';
import * as PropType from 'prop-types';

export class CreatingTimeForTask extends React.Component {
  state = {
    time: '',
  };

  createdTime = setInterval(() => {
    this.setState(() => {
      let newTime = formatDistanceToNowStrict(this.props.currentDate);
      return {
        time: newTime,
      };
    });
  }, 1000);

  render() {
    return <span className="created">{`created ${this.state.time} ago`}</span>;
  }
}
CreatingTimeForTask.propTypes = {
  currentDate: PropType.instanceOf(Date),
};
