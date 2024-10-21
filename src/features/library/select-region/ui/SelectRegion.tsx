import { useState } from "react";
import Select from "react-select";
import { REGION_DETAIL_LIST, REGION_LIST } from "../consts/regionData";
import { RegionOption } from "../model/type";

export default function SelectRegion() {
  const [region, setRegion] = useState<RegionOption | null>(null);
  const [dtlRegion, setDtlRegion] = useState<RegionOption | null>(null);

  const handleSelectRegion = (option: RegionOption | null) => {
    setRegion(option);
    setDtlRegion(null);
  };

  const handleSelectDtlRegion = (option: RegionOption | null) => {
    setDtlRegion(option);
  };

  return (
    <section>
      <Select
        value={region}
        options={REGION_LIST}
        onChange={handleSelectRegion}
        placeholder={"지역 선택"}
      />
      <Select
        value={dtlRegion}
        options={region ? REGION_DETAIL_LIST[region.value] : []}
        onChange={handleSelectDtlRegion}
        placeholder={"세부 지역 선택"}
        noOptionsMessage={() => "먼저 지역을 선택해주세요."}
      />
    </section>
  );
}
