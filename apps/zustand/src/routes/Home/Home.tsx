import { useEffect } from 'react';
import { useUserStore } from '../../store/userStore';

export function Home() {
  console.log('Home Render');
  const userName = useUserStore(state => state.userName);

  return <>Welcome {userName}</>;
}
