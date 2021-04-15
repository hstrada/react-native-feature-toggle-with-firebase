import remoteConfig from '@react-native-firebase/remote-config';
import {TRemoteTypes} from './remoteFeature';

export const getRemoteFeatureValue = (key: TRemoteTypes) =>
  remoteConfig().getValue(key).asBoolean();
