import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link and NavLink
import styles from './Sidebar.module.css';

const Sidebar = () => {
  // Add a 'path' property to each nav item
  const navItems = [
    { name: 'Dashboard', icon: '🏠', path: '/dashboard' },
    { name: 'Loan Applications', icon: '📝', path: '/loan-applications' },
    { name: 'Customers', icon: '👥', path: '/customers' },
    { name: 'Repayments', icon: '💰', path: '/repayments' },
    { name: 'Disbursements', icon: '💸', path: '/disbursements' },
    { name: 'Roles & Permissions', icon: '🔐', path: '/roles' }, // Example path
    { name: 'Reports & Analytics', icon: '📊', path: '/reports' },
    { name: 'Workflow & Automation', icon: '⚙️', path: '/workflow' },
  ];

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        {/* Make the logo a link to the dashboard */}
        <Link to="/" className={styles.logoLink}>LMS</Link>
      </div>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.name} className={styles.navItem}>
            {/* Use NavLink instead of <a>
              It's like <Link> but adds an 'active' class automatically 
              when the link matches the current URL.
            */}
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