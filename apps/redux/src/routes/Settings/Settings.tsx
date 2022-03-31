import { Toggle } from 'ui';
import { Feature } from '../../store/userSlice';
import { useUserSlice } from '../../store/useUserSlice';

export function Settings() {
  const { features: userFeatures, updateFeature } = useUserSlice();
  const handleToggle = (key: string, value: boolean) => {
    updateFeature({ feature: key as Feature, value });
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
