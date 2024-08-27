import Login from "./components/auth/login";
import Dashboard from "./components/auth/login/dashboard/Dashboard";
import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      </Router>
    </AuthProvider>
  );
}

export default App;
