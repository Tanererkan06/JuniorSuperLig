import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TabManager extends Component {
  state = {}

  render() {
    const { activeTab, handleTab, tabs } = this.props;
    return (
      <div className="tabb-manager">
        {tabs.map(({ label, value }) => (
          <div
            className={`tabb ${value === activeTab ? 'selected-tabb' : ''}`}
            onClick={() => { handleTab(value); }}
          >
            {label}
          </div>
        ))}
      </div>
    );
  }
}

TabManager.propTypes = {
  activeTab: PropTypes.number.isRequired,
  handleTab: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(Object).isRequired,
};
