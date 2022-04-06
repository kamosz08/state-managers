import { makeAutoObservable, observable } from 'mobx';

export type Feature = 'feature1' | 'feature2';
type UserFeatures = Record<Feature, boolean>;
type UserState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  userName: string;
  features: UserFeatures;
  getUser: () => void;
  updateFeature: (feature: Feature, value: boolean) => void;
  setUserName: (newUserName: string) => void;
};

class ApplicationStore implements UserState {
  status: UserState['status'] = 'idle';

  userName = '';

  features = { feature1: false, feature2: false };

  constructor() {
    makeAutoObservable(
      this,
      {
        status: observable,
        userName: observable,
        features: observable,
      },
      { autoBind: true },
    );
  }

  async getUser() {
    try {
      const data: Pick<UserState, 'userName' | 'features'> = await fetch(
        'user.json',
      ).then(response => response.json());
      this.status = 'success';
      this.userName = data.userName;
      this.features = data.features;
    } catch (error) {
      this.status = 'error';
    }
  }

  updateFeature(feature: Feature, value: boolean) {
    const newFeatures = { ...this.features, [feature]: value };
    this.features = newFeatures;
  }

  setUserName(newUserName: string) {
    this.userName = newUserName;
  }
}

const store = new ApplicationStore();

export { store };
