import { useUserStore } from '../../store/userStore';

export function Profile() {
  const userName = useUserStore(state => state.userName);

  return <>Profile route, {userName}</>;
}
