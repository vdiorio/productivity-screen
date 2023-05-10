import React, { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

interface ConfigButtonProps {
  toggleSideBar: MouseEventHandler,
  isSidebarVisible: boolean,
}

/**
 * Renders the ConfigButton component.
 *
 * @component
 * @return {JSX.Element} The rendered component.
 */
function ConfigButton({ toggleSideBar, isSidebarVisible }: ConfigButtonProps) {
  return (
    <div
      data-testid='config-button'
      className={`config-button ${isSidebarVisible ? 'spin' : ''}`}
      onClick={toggleSideBar}
    >
      <FontAwesomeIcon icon={faCog} className='cog' />
    </div>
  );
}

ConfigButton.propTypes = {
  toggleSideBar: PropTypes.func,
};

export default ConfigButton;
