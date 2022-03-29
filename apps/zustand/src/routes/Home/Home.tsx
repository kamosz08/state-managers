import { useUserStore } from '../../store/userStore';

export function Home() {
  const userName = useUserStore(state => state.userName);

  return (
    <>
      Welcome {userName},<p>Go to setting to toggle Your features</p>
    </>
  );
}
