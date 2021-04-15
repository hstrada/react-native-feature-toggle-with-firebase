import remoteConfig from '@react-native-firebase/remote-config';

const MINIMUM_FETCH_INTERVAL_MILLIS = 30;

export const fetchAndActivateRemoteConfig = async () => {
  try {
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: MINIMUM_FETCH_INTERVAL_MILLIS,
    });

    await remoteConfig().fetchAndActivate();
  } catch (error) {
    // tratamento de erro
    console.log(error);
  }
};
