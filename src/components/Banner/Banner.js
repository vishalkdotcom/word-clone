import React from 'react';

function Banner({ status, action, actionText, children }) {
  const className = status ? `banner ${status}` : 'banner';
  return (
    <div className={className}>
      {children}
      {typeof action === 'function' && (
        <button className='restart' onClick={action}>
          {actionText}
        </button>
      )}
    </div>
  );
}

export default Banner;
