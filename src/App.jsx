import React, { useMemo, useState } from 'react';
import { AppShell } from './components/layout/AppShell';
import { navItems } from './data/navigation';
import { assessmentQuestions } from './data/mockData';

// Splash & Auth
import { SplashScreen } from './components/common/SplashScreen';
import { LoginView } from './pages/Auth/LoginView';

// Pages
import { Dashboard } from './pages/Dashboard';
import { Assessment } from './pages/Assessment';
import { Ingredients } from './pages/Ingredients';
import { Validation } from './pages/Validation';
import { Documents } from './pages/Documents';
import { Assistant } from './pages/Assistant';
import { History } from './pages/History';
import { Profile } from './pages/Profile';

export function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    name: 'Fauzan Akbar',
    email: 'fauzan@culinary.id',
    phone: '081234567890',
    businessName: 'SpiegDit',
    nib: '1234567890123',
    kitchenAddress: 'Jl. Tembalang Raya No. 45, Semarang',
    halalSupervisor: 'Ahmad Dahlan',
    productCategory: 'Olahan Makanan Ringan & Bumbu (KBLI 10799)',
    avatarText: 'FA',
  });

  const [active, setActive] = useState('dashboard');
  const [toast, setToast] = useState('');
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [assessmentAnswers, setAssessmentAnswers] = useState({});
  const [chat, setChat] = useState([
    {
      role: 'ai',
      text: 'Halo! Saya Asisten Halal. Saya dapat membantu menjelaskan hasil validasi, SJPH, dan langkah persiapan berikutnya.'
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  const progress = useMemo(() => {
    const answered = Object.keys(assessmentAnswers).length;
    return Math.min(100, Math.round((answered / assessmentQuestions.length) * 100));
  }, [assessmentAnswers]);

  const go = (id) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const notify = (message) => {
    setToast(message);
    window.clearTimeout(window.__toastTimer);
    window.__toastTimer = window.setTimeout(() => setToast(''), 2600);
  };

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
    notify(`Selamat datang, ${userData.name} (${userData.businessName})!`);
  };

  const handleRegister = (newUserData) => {
    setCurrentUser(newUserData);
    setIsAuthenticated(true);
    notify(`Pendaftaran usaha "${newUserData.businessName}" berhasil!`);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    notify('Anda telah keluar dari akun.');
  };

  // 1. Render Splash Screen if active
  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  // 2. Render Login / Register if not authenticated
  if (!isAuthenticated) {
    return (
      <LoginView
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
    );
  }

  // 3. Current Page Title
  const currentTitle =
    active === 'profile'
      ? 'Profil Usaha'
      : (navItems.find((item) => item.id === active)?.label ?? 'Dashboard');

  // 4. Render Main App Shell
  return (
    <AppShell
      activeTab={active}
      currentTitle={currentTitle}
      onNavigate={go}
      toastMessage={toast}
      onNotify={notify}
      user={currentUser}
    >
      {active === 'dashboard' && <Dashboard onNavigate={go} onNotify={notify} user={currentUser} />}
      {active === 'assessment' && (
        <Assessment
          progress={progress}
          step={assessmentStep}
          setStep={setAssessmentStep}
          answers={assessmentAnswers}
          setAnswers={setAssessmentAnswers}
          onNotify={notify}
        />
      )}
      {active === 'ingredients' && <Ingredients onNavigate={go} />}
      {active === 'validation' && <Validation onNavigate={go} onNotify={notify} />}
      {active === 'documents' && <Documents onNotify={notify} user={currentUser} />}
      {active === 'assistant' && (
        <Assistant
          chat={chat}
          setChat={setChat}
          input={chatInput}
          setInput={setChatInput}
        />
      )}
      {active === 'history' && <History />}
      {active === 'profile' && (
        <Profile
          user={currentUser}
          onUpdateUser={(updated) => setCurrentUser(updated)}
          onLogout={handleLogout}
          onNotify={notify}
        />
      )}
    </AppShell>
  );
}

export default App;
