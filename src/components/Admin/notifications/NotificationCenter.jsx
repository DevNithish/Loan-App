import React, { useState, useEffect, useCallback, useMemo } from "react";
import { mockApi } from "../api";
import { BellIcon } from "../icons";
import "./NotificationCenter.css";

const NotificationItem = ({ notification, onMarkAsRead }) => (
  <div className={`notification-item ${!notification.read ? "unread" : ""}`}>
    <div
      className={`notification-item-dot ${notification.read ? "read" : ""}`}
    ></div>
    <div className="notification-item-content">
      <p>{notification.message}</p>
      <p className="time">{notification.time}</p>
    </div>
    {!notification.read && (
      <button
        onClick={() => onMarkAsRead(notification.id)}
        className="btn btn-link btn-sm text-decoration-none"
      >
        Mark as read
      </button>
    )}
  </div>
);

const NotificationList = ({ notifications, onMarkAsRead, onClearAll }) => (
  <div className="notification-panel">
    <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
      <h5 className="mb-0">Notifications</h5>
      {notifications.length > 0 && (
        <button
          onClick={onClearAll}
          className="btn btn-link btn-sm text-decoration-none"
        >
          Clear all
        </button>
      )}
    </div>
    <div className="notification-list">
      {notifications.length === 0 ? (
        <p className="p-4 text-center text-muted">No new notifications</p>
      ) : (
        notifications.map((notif) => (
          <NotificationItem
            key={notif.id}
            notification={notif}
            onMarkAsRead={onMarkAsRead}
          />
        ))
      )}
    </div>
  </div>
);

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications]
  );

  const fetchNotifications = useCallback(async () => {
    const data = await mockApi.getNotifications();
    setNotifications(data);
  }, []);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const handleMarkAsRead = async (id) => {
    const updatedNotifs = await mockApi.markNotificationAsRead(id);
    setNotifications(updatedNotifs);
  };

  const handleClearAll = async () => {
    await mockApi.clearNotifications();
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="notification-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="notification-button"
      >
        <BellIcon />
        {unreadCount > 0 && (
          <span className="notification-badge">{unreadCount}</span>
        )}
      </button>
      {isOpen && (
        <NotificationList
          notifications={notifications}
          onMarkAsRead={handleMarkAsRead}
          onClearAll={handleClearAll}
        />
      )}
    </div>
  );
};

export default NotificationCenter;
