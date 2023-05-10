import React from 'react';
import Schedule from './Schedule';

interface SidebarProps {
  isVisible: boolean,
}

/**
 * Renders the Sidebar component.
 *
 * @component
 * @return {JSX.Element} The rendered component.
 */
function Sidebar({ isVisible }: SidebarProps) {
  return (
    <div
      data-testid="sidebar"
      className={`sidebar ${isVisible ? 'slidein' : ''}`}>
      <Schedule />
    </div>
  );
}

export default Sidebar;
