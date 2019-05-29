import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './header.css';
import Signout from '../Auth/Signout';

const Header = ({
  currentUser,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          Logo
        </Link>
      </div> 
      <div className={styles.link}>
        <Link to="/">
          Tracks
        </Link>
      </div> 
      <div className={styles.link}>
        <Link to="/">
          SomeLink
        </Link>
      </div> 
      <div>
        {currentUser && (
          <Link to={`/profile/${currentUser.id}`}>
            {currentUser.username}
          </Link>
        )}
      </div>
      <Signout/>
    </div>
  )
}

export default Header;
