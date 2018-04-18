import React from 'react';
import { ProgressIndicator } from '../components';
import { NavMenu } from '../components';

const Header = (props) => {
  const styles = {
    margin: '2% 2% 6%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  };

  return (
    <div style={styles}>
      <ProgressIndicator />
      <NavMenu />
    </div>
  );
};

export default Header;