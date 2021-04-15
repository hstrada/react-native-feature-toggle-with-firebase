import remoteConfig from '@react-native-firebase/remote-config';

type TRemoteTypes = 'RemotineHome' | 'RemotineFeature';

const remoteKeys = {
  RemoteHome: {
    default: false,
  },
  RemotineFeature: {
    default: true,
  },
};

export const getRemoteFeatureValue = (key: TRemoteTypes) =>
  remoteConfig().getValue(key).asBoolean();

// const RemoteFeatures: TRemoteTypes[] = ['RemotineHome', 'RemotineFeature'];

// const loadRemoteFeatures = () => {
//   return RemoteFeatures.reduce((previousValue, current) => {
//     return [...previousValue, {[current]: getRemoteFeatureValue(current)}];
//   }, []);
// };
