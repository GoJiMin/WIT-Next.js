import Select from "react-select";
import { REGION_DETAIL_LIST, REGION_LIST } from "../consts/regionData";
import { RegionOption, RegionState } from "../model/type";

type Props = {
  regionState: RegionState;
  setRegionState: React.Dispatch<React.SetStateAction<RegionState>>;
};

export default function SelectRegion({ regionState, setRegionState }: Props) {
  const handleSelect = (
    key: "region" | "dtlRegion",
    option: RegionOption | null
  ) => {
    setRegionState((prev) => ({
      ...prev,
      [key]: option,
      ...(key === "region" && { dtlRegion: null }),
    }));
  };

  return (
    <section>
      <Select
        value={regionState.region}
        options={REGION_LIST}
        onChange={(option) => handleSelect("region", option)}
        placeholder={"지역 선택"}
      />
      <Select
        value={regionState.dtlRegion}
        options={
          regionState.region ? REGION_DETAIL_LIST[regionState.region.value] : []
        }
        onChange={(option) => handleSelect("dtlRegion", option)}
        placeholder={"세부 지역 선택"}
        noOptionsMessage={() => "먼저 지역을 선택해주세요."}
      />
    </section>
  );
}
