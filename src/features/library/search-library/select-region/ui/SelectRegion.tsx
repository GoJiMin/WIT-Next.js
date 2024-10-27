import Select from "react-select";
import { REGION_DETAIL_LIST, REGION_LIST } from "../consts/regionData";
import { RegionOption, RegionState } from "../model/type";

type Props = {
  regionState: RegionState;
  handleSelectRegion: (
    key: "region" | "dtlRegion",
    option: RegionOption | null
  ) => void;
};

export default function SelectRegion({
  regionState,
  handleSelectRegion,
}: Props) {
  return (
    <section>
      <Select
        value={regionState.region}
        options={REGION_LIST}
        onChange={(option) => handleSelectRegion("region", option)}
        placeholder={"지역 선택"}
      />
      <Select
        value={regionState.dtlRegion}
        options={
          regionState.region ? REGION_DETAIL_LIST[regionState.region.value] : []
        }
        onChange={(option) => handleSelectRegion("dtlRegion", option)}
        placeholder={"세부 지역 선택"}
        noOptionsMessage={() => "먼저 지역을 선택해주세요."}
      />
    </section>
  );
}
