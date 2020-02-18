import React from 'react';
import WarningIcon from '@material-ui/icons/Warning';

function NotFound() {
  return (
    <div className="content">
      <p className="nf-404">404</p>
      <div className="nf-container">
        <WarningIcon className="nf-warning-icon" />
        <span>The page you were looking for does not exist.</span>
      </div>
    </div>
  );
}

export default NotFound;
