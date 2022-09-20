import React from 'react';
import './footer.css';
import * as PropType from 'prop-types';

import { TasksFilter } from '../tasks-filter/tasks-filter';

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">{`${this.props.left} items left, ${this.props.active} items active`}</span>
        <TasksFilter filterChange={() => this.props.filterChange} />
        <button className="clear-completed" onClick={this.props.clearFilter}>
          Clear completed
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  left: PropType.number,
  active: PropType.number,
  filterChange: PropType.func,
  clearFilter: PropType.func,
};
