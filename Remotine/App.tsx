import React from 'react';
import {Text, View} from 'react-native';

import remoteConfig from '@react-native-firebase/remote-config';

import iid from '@react-native-firebase/iid';

async function getInstanceId() {
  const id = await iid().getToken();
  console.log('Current Instance ID: ', id);
}

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
    getInstanceId();
  }, []);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default App;
