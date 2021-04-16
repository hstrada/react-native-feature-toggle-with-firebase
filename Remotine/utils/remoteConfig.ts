import remoteConfig from '@react-native-firebase/remote-config';
import {TRemoteTypes} from './constants';

export const getRemoteFeatureValue = (key: TRemoteTypes) =>
  remoteConfig().getValue(key).asBoolean();
