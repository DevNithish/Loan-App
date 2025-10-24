import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login/Login";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Admin route */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </Router>
  );
}
>>>>>>> 23357f2ce70679c3af486921b68d2f5872924840

export default App;
