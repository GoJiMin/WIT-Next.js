export type RegionOption = {
  value: string;
  label: string;
};

export interface RegionState {
  region: RegionOption | null;
  dtlRegion: RegionOption | null;
}
