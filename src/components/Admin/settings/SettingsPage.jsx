import React, { useState, useEffect } from "react";
import { mockApi } from "../api";
import LoadingSpinner from "../LoadingSpinner";
import "../admin.css";

const NotificationPreferencesForm = () => {
  const [settings, setSettings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    mockApi.getSettings().then((data) => {
      setSettings(data.notifications);
      setIsLoading(false);
    });
  }, []);

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    await mockApi.updateSettings({ notifications: settings });
    setIsSaving(false);
    setToast("Settings saved successfully!");
    setTimeout(() => setToast(""), 3000);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="card">
      {toast && <div className="alert alert-success m-3">{toast}</div>}
      <div className="card-header">
        <h4 className="mb-0">Notification Preferences</h4>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {Object.keys(settings).map((key) => (
            <li
              key={key}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span className="text-capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings[key]}
                  onChange={() => handleToggle(key)}
                />
                <span className="toggle-slider"></span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="card-footer text-end">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="btn btn-primary"
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

const SystemLogsTable = () => {
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    mockApi.getSystemLogs().then((data) => {
      setLogs(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="mb-0">System Logs</h4>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>Timestamp</th>
                <th>User</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id}>
                  <td>{log.timestamp}</td>
                  <td>{log.user}</td>
                  <td>{log.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("preferences");
  return (
    <div>
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "preferences" ? "active" : ""
            }`}
            onClick={() => setActiveTab("preferences")}
          >
            Preferences
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "logs" ? "active" : ""}`}
            onClick={() => setActiveTab("logs")}
          >
            System Logs
          </button>
        </li>
      </ul>
      <div>
        {activeTab === "preferences" && <NotificationPreferencesForm />}
        {activeTab === "logs" && <SystemLogsTable />}
      </div>
    </div>
  );
};

export default SettingsPage;
