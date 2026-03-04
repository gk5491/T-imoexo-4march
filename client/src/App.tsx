import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { ChatProvider } from "./contexts/ChatContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ContactSuccess from "./pages/ContactSuccess";
import About from "./pages/About";
import Estore from "./pages/Estore";
import WorldMap from "./components/WorldMap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BuyerInquiryForm from "./components/BuyerInquiryForm";
import ManufacturerInquiryForm from "./components/ManufacturerInquiryForm";
import StatsCounter from "../src/components/StatsCounter";
import VideoSection from "./components/VideoSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Solutions from "./pages/Solutions";
import GlobalServices from "./components/GlobalServices";

// Admin components
import { AdminAuthProvider } from "./admin/contexts/AdminAuthContext";
import { AdminLogin } from "./admin/pages/AdminLogin";
import { DashboardLayout } from "./admin/layouts/DashboardLayout";
import { Dashboard } from "./admin/pages/Dashboard";
import { ContentList } from "./admin/pages/ContentList";
import { Comments } from "./admin/pages/Comments";
import { MediaLibrary } from "./admin/pages/MediaLibrary";
import { Gallery } from "./admin/pages/Gallery";

import { Settings } from "./admin/pages/Settings";
import { Inquiries } from "./admin/pages/Inquiries";
import { InquiryDetail } from "./admin/pages/InquiryDetail";
import { UsersManagement } from "./admin/pages/UsersManagement";
import { ProtectedRoute } from "./admin/components/ProtectedRoute";
import { ContentEditor } from "./admin/pages/ContentEditor";
import Resources from "./pages/Resources";
import BlogPost from "./components/BlogPost";
import "./App.css";
import FloatingChat from "./components/FloatingChat";
import Products from "./pages/Products";

// ✅ Custom layout to handle hiding Header/Footer for admin pages
function AppContent() {
  const location = useLocation();

  // ✅ Hide Header & Footer when path starts with /admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!isAdminRoute && <Header />}
      <main className="flex-grow">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/GlobalServices" element={<GlobalServices />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/StatsCounter" element={<StatsCounter end={undefined} />} />
          <Route path="/contact-success" element={<ContactSuccess />} />
          <Route path="/estore" element={<Estore />} />
          <Route path="/worldmap" element={<WorldMap />} />
          <Route path="/videosection" element={<VideoSection />} />
          <Route path="/buyer-inquiry" element={<BuyerInquiryForm />} />
          <Route path="/manufacturer-inquiry" element={<ManufacturerInquiryForm />} />
          <Route path="/products" element={<Products />} />
          {/* Blog routes */}
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog-post/:slug" element={<BlogPost />} />
          <Route path="/case-study/:slug" element={<BlogPost />} />
          <Route path="/white-paper/:slug" element={<BlogPost />} />
          <Route path="/news/:slug" element={<BlogPost />} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminAuthProvider><Outlet /></AdminAuthProvider>}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="login" element={<AdminLogin />} />

            <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="content" element={<ContentList />} />
              <Route path="comments" element={<Comments />} />
              <Route path="inquiries" element={<Inquiries />} />
              <Route path="inquiries/:id" element={<InquiryDetail />} />
              <Route path="media" element={<MediaLibrary />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="content/new" element={<ContentEditor />} />
              <Route path="content/edit/:id" element={<ContentEditor />} />
              <Route path="settings" element={<Settings />} />
              <Route path="users" element={<UsersManagement />} />
            </Route>

            {/* Admin fallback */}
            <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
          </Route>
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}

      {/* Chatbot only on public routes */}
      {!isAdminRoute && (
        <>
          <FloatingChat />
          {/* <button
            className="chatbot-button"
            onClick={() => setShowChat(true)}
            aria-label="Open chat"
          >
            💬
          </button>
          <ChatDrawer open={showChat} onOpenChange={setShowChat} /> */}
        </>
      )}
    </div>
  );
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ChatProvider>
          <Router basename="/">
            <ScrollToTop />
            <AppContent />
          </Router>
        </ChatProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
