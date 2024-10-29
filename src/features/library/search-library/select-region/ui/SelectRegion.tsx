import Select from "react-select";
import styles from "../styles.module.css";
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
    <section className={styles.selects}>
      <Select
        className={styles.select}
        value={regionState.region}
        options={REGION_LIST}
        onChange={(option) => handleSelectRegion("region", option)}
        placeholder={"지역 선택"}
        isSearchable={false}
      />
      <Select
        className={styles.select}
        value={regionState.dtlRegion}
        options={
          regionState.region ? REGION_DETAIL_LIST[regionState.region.value] : []
        }
        onChange={(option) => handleSelectRegion("dtlRegion", option)}
        placeholder={"세부 지역 선택"}
        noOptionsMessage={() => "먼저 지역을 선택해주세요."}
        isSearchable={false}
      />
    </section>
  );
}
