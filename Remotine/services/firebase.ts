import remoteConfig from '@react-native-firebase/remote-config';

import {remoteKeys} from '../utils/remoteFeature';

const MINIMUM_FETCH_INTERVAL_MILLIS = 30;

export const setRemoteConfigAndFetchValues = async () => {
  try {
    await remoteConfig().setDefaults(remoteKeys);
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: MINIMUM_FETCH_INTERVAL_MILLIS,
    });

    await remoteConfig().fetchAndActivate();
  } catch (error) {
    console.log(error);
  }
};
