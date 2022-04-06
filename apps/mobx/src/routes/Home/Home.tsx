import { observer } from 'mobx-react-lite';
import { store } from '../../store/userStore';

export const Home = observer(() => {
  const { userName } = store;

  return (
    <>
      Welcome {userName},<p>Go to setting to toggle Your features</p>
    </>
  );
});
