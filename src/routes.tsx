import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ActivityPage from './pages/activity/ActivityPage';
import ChatPage from './pages/chat/ChatPage';
import CreatePage from './pages/create/CreatePage';
import ExplorePage from './pages/explore/ExplorePage';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';
import ConnectionsPage from './pages/settings/ConnectionsPage';
import EditProfilePage from './pages/settings/EditProfilePage';
import LogoutPage from './pages/settings/LogoutPage';
import PasswordPage from './pages/settings/PasswordPage';
import PrivacyPage from './pages/settings/PrivacyPage';
import SettingsPage from './pages/settings/SettingsPage';
import SignupPage from './pages/signup/SignupPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<DashboardLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/settings" element={<SettingsPage />}>
            <Route path="edit_profile" element={<EditProfilePage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="password" element={<PasswordPage />} />
            <Route path="connections" element={<ConnectionsPage />} />
            <Route path="logout" element={<LogoutPage />} />
          </Route>
        </Route>
        <Route path="create" element={<CreatePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
