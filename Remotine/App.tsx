import React from 'react';
import {Text, View} from 'react-native';

import {setRemoteConfigAndFetchValues} from './src/services/firebase';
import {getRemoteFeatureValue} from './src/utils/remoteConfig';

const App = () => {
  React.useEffect(() => {
    setRemoteConfigAndFetchValues();
  }, []);

  const isHomeFeatureEnabled = getRemoteFeatureValue('RemotineHome');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isHomeFeatureEnabled ? <Text>sim</Text> : <Text>não</Text>}
    </View>
  );
};

export default App;
