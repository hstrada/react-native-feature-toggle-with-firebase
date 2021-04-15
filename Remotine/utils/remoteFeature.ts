export type TRemoteTypes = 'RemotineHome' | 'RemotineFeature';

export const remoteKeys: {[key in TRemoteTypes]: boolean} = {
  RemotineHome: false,
  RemotineFeature: true,
};
