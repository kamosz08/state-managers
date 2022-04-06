import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Navbar } from 'ui';
import './App.css';
import { observer } from 'mobx-react-lite';
import { Home } from './routes/Home/Home';
import { Profile } from './routes/Profile/Profile';
import { Settings } from './routes/Settings/Settings';

import { store, Feature } from './store/userStore';

export const App = observer(() => {
  const navigate = useNavigate();
  const { status, userName, features: userFeatures } = store;

  useEffect(() => {
    store.getUser();
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
});
