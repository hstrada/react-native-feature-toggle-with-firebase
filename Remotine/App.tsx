import React from 'react';
import {Text, View} from 'react-native';

import remoteConfig from '@react-native-firebase/remote-config';

type TRemoteTypes = 'RemotineHome' | 'RemotineFeature';

const RemoteFeatures: TRemoteTypes[] = ['RemotineHome', 'RemotineFeature'];

const loadRemoteValue = async (key: TRemoteTypes) => {
  try {
    return await remoteConfig().getValue(key).asBoolean();
  } catch (error) {
    // serviço de log (error)
  }
};

const loadRemoteFeatures = () => {
  return RemoteFeatures.reduce((acc, current) => {
    return [...acc, {[current]: loadRemoteValue(current)}];
  }, []);
};

const fetchRemoteConfig = async () => {
  try {
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: 30,
    });
    // await remoteConfig().setDefaults({
    //   RemotineHome: false,
    //   RemotineFeature: false,
    // });

    await remoteConfig().fetchAndActivate();
    await loadRemoteFeatures();
  } catch (error) {
    // tratamento de erro
    console.log(error);
  }
};

const App = () => {
  React.useEffect(() => {
    fetchRemoteConfig();
  }, []);

  console.log(loadRemoteFeatures());

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default App;
