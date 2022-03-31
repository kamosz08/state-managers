import { useUserSlice } from '../../store/useUserSlice';

export function Home() {
  const { userName } = useUserSlice();

  return (
    <>
      Welcome {userName},<p>Go to setting to toggle Your features</p>
    </>
  );
}
