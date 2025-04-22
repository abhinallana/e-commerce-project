import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function AppWrapper() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedName = localStorage.getItem('userName');
    if (storedToken) {
      setToken(storedToken);
      setUserName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setToken(null);
    setUserName(null);
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/products" style={{ marginRight: '10px' }}>Products</Link>

        {token ? (
          <>
            <span style={{ marginLeft: '10px' }}>Welcome, <strong>{userName}</strong></span>
            <button onClick={handleLogout} style={{ marginLeft: '10px' }}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{ marginLeft: '10px' }}>Login</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
