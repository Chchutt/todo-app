import React from 'react';
import './tasks-filter.css';
import * as PropType from 'prop-types';

export class TasksFilter extends React.Component {
  render() {
    const { filterChange } = this.props;
    const onBtnClick = (e, fn) => {
      let newFilterName = e.target.className;
      return fn(newFilterName);
    };

    return (
      <ul className="filters">
        <li>
          <button className="all" onClick={(e) => onBtnClick(e, filterChange())}>
            All
          </button>
        </li>
        <li>
          <button className="active" onClick={(e) => onBtnClick(e, filterChange())}>
            Active
          </button>
        </li>
        <li>
          <button className="completed" onClick={(e) => onBtnClick(e, filterChange())}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

TasksFilter.propTypes = {
  filterChange: PropType.func,
};
