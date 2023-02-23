import React from 'react';

function Banner({ status, children }) {
  const className = status ? `banner ${status}` : 'banner';
  return <div className={className}>{children}</div>;
}

export default Banner;
