import remoteConfig from '@react-native-firebase/remote-config';

type TRemoteTypes = 'RemotineHome' | 'RemotineFeature';

export const getRemoteFeatureValue = async (key: TRemoteTypes) =>
  await remoteConfig().getValue(key).asBoolean();

// const RemoteFeatures: TRemoteTypes[] = ['RemotineHome', 'RemotineFeature'];

// const loadRemoteFeatures = () => {
//   return RemoteFeatures.reduce((previousValue, current) => {
//     return [...previousValue, {[current]: getRemoteFeatureValue(current)}];
//   }, []);
// };
