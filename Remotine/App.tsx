import React from 'react';
import {Text, View} from 'react-native';

import remoteConfig from '@react-native-firebase/remote-config';

const fetchRemoteConfig = async () => {
  try {
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: 30,
    });
    await remoteConfig().setDefaults({
      RemotineHome: false,
    });

    await remoteConfig().fetchAndActivate();
    console.log(remoteConfig().getValue('RemotineHome'));
    console.log(remoteConfig().getValue('RemotineFeature'));
  } catch (error) {
    console.log(error);
  }
};

const App = () => {
  React.useEffect(() => {
    fetchRemoteConfig();
  }, []);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default App;
