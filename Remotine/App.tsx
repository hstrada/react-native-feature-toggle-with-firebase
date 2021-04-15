import React from 'react';
import {Text, View} from 'react-native';

import {fetchAndActivateRemoteConfig} from './services/firebase';
import {getRemoteFeatureValue} from './utils/remoteConfig';

const App = () => {
  React.useEffect(() => {
    fetchAndActivateRemoteConfig();
  }, []);

  const isHomeFeatureEnabled = getRemoteFeatureValue('RemotineHome');

  // pontos de atenção

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isHomeFeatureEnabled ? <Text>sim</Text> : <Text>não</Text>}
    </View>
  );
};

export default App;
