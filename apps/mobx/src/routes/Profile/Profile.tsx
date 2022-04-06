import { observer } from 'mobx-react-lite';
import { store } from '../../store/userStore';

export const Profile = observer(() => {
  const { userName } = store;

  return <>Profile route, {userName}</>;
});
