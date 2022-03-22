import React from 'react';
import { Button } from 'ui';
import './App.css';
import { Navbar } from './components/Navbar';

export function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Button />
    </div>
  );
}
