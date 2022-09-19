import React from 'react';
import './task-list.css';
import * as PropType from 'prop-types';

import Task from '../task';

export default class TaskList extends React.Component {
  render() {
    const { onToggleActive, onToggleLeft, visibleItems, newDescription } = this.props;
    const element = visibleItems.map((item) => {
      const { currentDate } = item;
      const { description } = item;
      const { id } = item;
      const { active } = item;
      const { status } = item;
      return (
        <Task
          description={description}
          currentDate={currentDate}
          key={id}
          id={id}
          active={active}
          status={status}
          onToggleActive={() => onToggleActive(id)}
          onToggleLeft={() => onToggleLeft(id)}
          newDescription={newDescription}
        />
      );
    });
    return <ul className="todo-list">{element}</ul>;
  }
}
TaskList.propTypes = {
  onToggleActive: PropType.func,
  onToggleLeft: PropType.func,
  visibleItems: PropType.array,
  // newDescription: PropType.func,
};
