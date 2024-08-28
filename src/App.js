import Login from "./components/auth/login";
import Dashboard from "./components/dashboard/Dashboard";
import Events from "./components/events/Events";
import Home from "./components/home/Home";
import Settings from "./components/settings/Settings";
import Student from "./components/student/Student";
import { AuthProvider } from "./contexts/authContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/home/dashboard" />} />
          <Route path="/home" element={<Home />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="student" element={<Student />} />
            <Route path="upcoming-events" element={<Events />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
