import { Toggle } from 'ui';
import { Feature, useUserStore } from '../../store/userStore';

export function Settings() {
  const userFeatures = useUserStore(state => state.features);
  const updateFeature = useUserStore(state => state.updateFeature);

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
}
