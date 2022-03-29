import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Navbar } from 'ui';
import './App.css';
import { Home } from './routes/Home/Home';
import { Profile } from './routes/Profile/Profile';
import { Settings } from './routes/Settings/Settings';
import { Feature, useUserStore } from './store/userStore';

export function App() {
  const navigate = useNavigate();
  const getUser = useUserStore(state => state.getUser);
  const status = useUserStore(state => state.status);
  const userName = useUserStore(state => state.userName);
  const userFeatures = useUserStore(state => state.features);

  useEffect(() => {
    getUser();
  }, []);

  if (status === 'idle' || status === 'loading') return <>loading</>;
  if (status === 'error') return <>error</>;
  return (
    <div className="w-full h-screen">
      <Navbar
        leftItems={[
          {
            label: 'Home',
            onClick: () => {
              navigate('/', { replace: true });
            },
          },
          {
            label: 'Settings',
            onClick: () => {
              navigate('/settings', { replace: true });
            },
          },
          ...Object.keys(userFeatures)
            .filter(featureKey => userFeatures[featureKey as Feature])
            .map(featureKey => ({
              label: featureKey,
              onClick: () => {
                navigate(`/${featureKey}`, { replace: true });
              },
            })),
        ]}
        rightItems={[
          {
            label: userName,
            onClick: () => {
              navigate('/profile', { replace: true });
            },
          },
        ]}
        title="State Management"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
