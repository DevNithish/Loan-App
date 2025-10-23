import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  // Add a 'path' property to each nav item
  const navItems = [
    { name: 'Dashboard', icon: '🏠', path: '/admin/dashboard' }, // cite: 1
    { name: 'Loan Applications', icon: '📝', path: '/admin/loan-applications' }, // cite: 2
    { name: 'Customers', icon: '👥', path: '/admin/customers' }, // cite: 3
    { name: 'Repayments', icon: '💰', path: '/admin/repayments' }, // cite: 4
    { name: 'Disbursements', icon: '💸', path: '/admin/disbursements' }, // cite: 5
    { name: 'Roles & Permissions', icon: '🔐', path: '/admin/roles' }, // cite: 6
    { name: 'Reports & Analytics', icon: '📊', path: '/admin/reports' }, // cite: 7
    { name: 'Workflow & Automation', icon: '⚙️', path: '/admin/workflow' }, // cite: 8
    { name: 'Settings/Notifications', icon: '🔔', path: '/admin/settings' }, // cite: 9
  ];

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>LMS</Link>
      </div>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.name} className={styles.navItem}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.text}>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;