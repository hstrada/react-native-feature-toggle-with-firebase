import React from 'react';
import {Text, View} from 'react-native';

import {setRemoteConfigAndFetchValues} from './services/firebase';
import {getRemoteFeatureValue} from './utils/remoteConfig';

const App = () => {
  React.useEffect(() => {
    setRemoteConfigAndFetchValues();
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
