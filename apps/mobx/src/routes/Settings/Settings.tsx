import { observer } from 'mobx-react-lite';
import { Toggle } from 'ui';
import { Feature, store } from '../../store/userStore';

export const Settings = observer(() => {
  const { features: userFeatures, updateFeature } = store;

  const handleToggle = (key: string, value: boolean) => {
    updateFeature(key as Feature, value);
  };

  return (
    <>
      Settings route
      {Object.keys(userFeatures).map(featKey => (
        <Toggle
          isEnabled={userFeatures[featKey as Feature]}
          label={featKey}
          handleToggle={handleToggle}
        />
      ))}
    </>
  );
});
