import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import AnnouncementBanner from "./components/AnnouncementBanner";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import AdminPanel from "./pages/AdminPanel";
import LoginForm from "./components/auth/LoginForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { AuthProvider } from "./lib/auth";
import ProductPage from "./pages/ProductPage"; // Import the new ProductPage component

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-rebel-dark text-rebel-light">
          <Navbar />
          <AnnouncementBanner />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections/:category" element={<CollectionPage />} />
            <Route
              path="/products/:productName"
              element={<ProductPage />}
            />{" "}
            {/* Add this route */}
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#333",
                color: "#fff",
              },
              success: {
                duration: 3000,
              },
              error: {
                duration: 4000,
              },
            }}
          />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
