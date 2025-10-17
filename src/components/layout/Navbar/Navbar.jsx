// src/components/layout/Navbar/Navbar.jsx

import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.searchContainer}>
        <span className={styles.searchIcon}>🔍</span>
        <input type="text" placeholder="Search loans, customers..." className={styles.searchInput} />
      </div>

      <div className={styles.userMenu}>
        <button className={styles.iconButton}>
          <span>🔔</span>
          <span className={styles.notificationBadge}>3</span>
        </button>
        <div className={styles.profile}>
          <img
            src="https://i.pravatar.cc/40" // Placeholder avatar
            alt="User Avatar"
            className={styles.avatar}
          />
          <div className={styles.profileInfo}>
            <span className={styles.userName}>Admin User</span>
            <span className={styles.userRole}>Loan Officer</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;