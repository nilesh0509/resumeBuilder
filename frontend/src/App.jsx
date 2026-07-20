import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardPage from './pages/DashboardPage';
import CreateResume from './pages/CreateResume';
import EditResume from './pages/EditResume';
import ViewResume from './pages/ViewResume';
import ProtectedRoute from './components/ProtectedRoute';
import Particles from './components/common/Particles';
import FloatingShapes from './components/common/FloatingShapes';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background layer */}
      <div className="fixed inset-0 bg-premium z-0" />

      {/* Floating Shapes & Particles - above background */}
      <FloatingShapes />
      <Particles />

      {/* Main content - above everything */}
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <CreateResume />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <ProtectedRoute>
                  <EditResume />
                </ProtectedRoute>
              }
            />
            <Route
              path="/view/:id"
              element={
                <ProtectedRoute>
                  <ViewResume />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;