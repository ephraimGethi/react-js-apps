import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const isAuthenticated = false;
  return (
    <Router>
      <div className="App">
        <AuthProvider>
        <Header />
        <Routes>
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
