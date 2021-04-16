export type TRemoteTypes = 'RemotineHome' | 'RemotineFeature' | 'FeatureHome';

export const remoteKeys: {[key in TRemoteTypes]: boolean} = {
  RemotineHome: false,
  RemotineFeature: true,
  FeatureHome: false,
};
