import { useUserSlice } from '../../store/useUserSlice';

export function Profile() {
  const { userName } = useUserSlice();

  return <>Profile route, {userName}</>;
}
