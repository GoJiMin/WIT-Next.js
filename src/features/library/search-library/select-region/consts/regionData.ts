import { Options } from "react-select";
import { RegionOption } from "../model/type";

export const REGION_LIST: Options<RegionOption> = [
  { value: "11", label: "서울" },
  { value: "21", label: "부산" },
  { value: "22", label: "대구" },
  { value: "23", label: "인천" },
  { value: "24", label: "광주" },
  { value: "25", label: "대전" },
  { value: "26", label: "울산" },
  { value: "29", label: "세종" },
  { value: "31", label: "경기" },
  { value: "32", label: "강원" },
  { value: "33", label: "충북" },
  { value: "34", label: "충남" },
  { value: "35", label: "전북" },
  { value: "36", label: "전남" },
  { value: "37", label: "경북" },
  { value: "38", label: "경남" },
  { value: "39", label: "제주" },
];

export const REGION_DETAIL_LIST: Record<string, RegionOption[]> = {
  // 서울
  11: [
    { value: "11010", label: "종로구" },
    { value: "11020", label: "중구" },
    { value: "11030", label: "용산구" },
    { value: "11040", label: "성동구" },
    { value: "11050", label: "광진구" },
    { value: "11060", label: "동대문구" },
    { value: "11070", label: "중랑구" },
    { value: "11080", label: "성북구" },
    { value: "11090", label: "강북구" },
    { value: "11100", label: "도봉구" },
    { value: "11110", label: "노원구" },
    { value: "11120", label: "은평구" },
    { value: "11130", label: "서대문구" },
    { value: "11140", label: "마포구" },
    { value: "11150", label: "양천구" },
    { value: "11160", label: "강서구" },
    { value: "11170", label: "구로구" },
    { value: "11180", label: "금천구" },
    { value: "11190", label: "영등포구" },
    { value: "11200", label: "동작구" },
    { value: "11210", label: "관악구" },
    { value: "11220", label: "서초구" },
    { value: "11230", label: "강남구" },
    { value: "11240", label: "송파구" },
    { value: "11250", label: "강동구" },
  ],
  // 부산
  21: [
    { value: "21010", label: "중구" },
    { value: "21020", label: "서구" },
    { value: "21030", label: "동구" },
    { value: "21040", label: "영도구" },
    { value: "21050", label: "부산진구" },
    { value: "21060", label: "동래구" },
    { value: "21070", label: "남구" },
    { value: "21080", label: "북구" },
    { value: "21090", label: "해운대구" },
    { value: "21100", label: "사하구" },
    { value: "21110", label: "금정구" },
    { value: "21120", label: "강서구" },
    { value: "21130", label: "연제구" },
    { value: "21140", label: "수영구" },
    { value: "21150", label: "사상구" },
    { value: "21310", label: "기장군" },
  ],
  // 대구
  22: [
    { value: "22010", label: "중구" },
    { value: "22020", label: "동구" },
    { value: "22030", label: "서구" },
    { value: "22040", label: "남구" },
    { value: "22050", label: "북구" },
    { value: "22060", label: "수성구" },
    { value: "22070", label: "달서구" },
    { value: "22310", label: "달성군" },
  ],
  // 인천
  23: [
    { value: "23010", label: "중구" },
    { value: "23020", label: "동구" },
    { value: "23030", label: "남구" },
    { value: "23040", label: "연수구" },
    { value: "23050", label: "남동구" },
    { value: "23060", label: "부평구" },
    { value: "23070", label: "계양구" },
    { value: "23080", label: "서구" },
    { value: "23310", label: "강화군" },
    { value: "23320", label: "옹진군" },
  ],
  // 광주
  24: [
    { value: "24010", label: "동구" },
    { value: "24020", label: "서구" },
    { value: "24030", label: "남구" },
    { value: "24040", label: "북구" },
    { value: "24050", label: "광산구" },
  ],
  // 대전
  25: [
    { value: "25010", label: "동구" },
    { value: "25020", label: "중구" },
    { value: "25030", label: "서구" },
    { value: "25040", label: "유성구" },
    { value: "25050", label: "대덕구" },
  ],
  // 울산
  26: [
    { value: "26010", label: "중구" },
    { value: "26020", label: "남구" },
    { value: "26030", label: "동구" },
    { value: "26040", label: "북구" },
    { value: "26310", label: "울주군" },
  ],
  // 세종
  29: [{ value: "29010", label: "세종시" }],
  // 경기도
  31: [
    { value: "31011", label: "수원시 장안구" },
    { value: "31012", label: "수원시 권선구" },
    { value: "31013", label: "수원시 팔달구" },
    { value: "31014", label: "수원시 영통구" },
    { value: "31021", label: "성남시 수정구" },
    { value: "31022", label: "성남시 중원구" },
    { value: "31023", label: "성남시 분당구" },
    { value: "31030", label: "의정부시" },
    { value: "31041", label: "안양시 만안구" },
    { value: "31042", label: "안양시 동안구" },
    { value: "31050", label: "부천시" },
    { value: "31060", label: "광명시" },
    { value: "31070", label: "평택시" },
    { value: "31080", label: "동두천시" },
    { value: "31091", label: "안산시 상록구" },
    { value: "31092", label: "안산시 단원구" },
    { value: "31101", label: "고양시 덕양구" },
    { value: "31103", label: "고양시 일산동구" },
    { value: "31104", label: "고양시 일산서구" },
    { value: "31110", label: "과천시" },
    { value: "31120", label: "구리시" },
    { value: "31130", label: "남양주시" },
    { value: "31140", label: "오산시" },
    { value: "31150", label: "시흥시" },
    { value: "31160", label: "군포시" },
    { value: "31170", label: "의왕시" },
    { value: "31180", label: "하남시" },
    { value: "31191", label: "용인시 처인구" },
    { value: "31192", label: "용인시 기흥구" },
    { value: "31193", label: "용인시 수지구" },
    { value: "31200", label: "파주시" },
    { value: "31210", label: "이천시" },
    { value: "31220", label: "안성시" },
    { value: "31230", label: "김포시" },
    { value: "31240", label: "화성시" },
    { value: "31250", label: "광주시" },
    { value: "31260", label: "양주시" },
    { value: "31270", label: "포천시" },
    { value: "31280", label: "여주시" },
    { value: "31350", label: "연천군" },
    { value: "31370", label: "가평군" },
    { value: "31380", label: "양평군" },
  ],
  // 강원도
  32: [
    { value: "32010", label: "춘천시" },
    { value: "32020", label: "원주시" },
    { value: "32030", label: "강릉시" },
    { value: "32040", label: "동해시" },
    { value: "32050", label: "태백시" },
    { value: "32060", label: "속초시" },
    { value: "32070", label: "삼척시" },
    { value: "32310", label: "홍천군" },
    { value: "32320", label: "횡성군" },
    { value: "32330", label: "영월군" },
    { value: "32340", label: "평창군" },
    { value: "32350", label: "정선군" },
    { value: "32360", label: "철원군" },
    { value: "32370", label: "화천군" },
    { value: "32380", label: "양구군" },
    { value: "32390", label: "인제군" },
    { value: "32400", label: "고성군" },
    { value: "32410", label: "양양군" },
  ],
  // 충청북도
  33: [
    { value: "33020", label: "충주시" },
    { value: "33030", label: "제천시" },
    { value: "33041", label: "청주시 상당구" },
    { value: "33042", label: "청주시 서원구" },
    { value: "33043", label: "청주시 흥덕구" },
    { value: "33044", label: "청주시 청원구" },
    { value: "33320", label: "보은군" },
    { value: "33330", label: "옥천군" },
    { value: "33340", label: "영동군" },
    { value: "33350", label: "진천군" },
    { value: "33360", label: "괴산군" },
    { value: "33370", label: "음성군" },
    { value: "33380", label: "단양군" },
    { value: "33390", label: "증평군" },
  ],
  // 충청남도
  34: [
    { value: "34011", label: "천안시 동남구" },
    { value: "34012", label: "천안시 서북구" },
    { value: "34020", label: "공주시" },
    { value: "34030", label: "보령시" },
    { value: "34040", label: "아산시" },
    { value: "34050", label: "서산시" },
    { value: "34060", label: "논산시" },
    { value: "34070", label: "계룡시" },
    { value: "34080", label: "당진시" },
    { value: "34310", label: "금산군" },
    { value: "34330", label: "부여군" },
    { value: "34340", label: "서천군" },
    { value: "34350", label: "청양군" },
    { value: "34360", label: "홍성군" },
    { value: "34370", label: "예산군" },
    { value: "34380", label: "태안군" },
  ],
  // 전라북도
  35: [
    { value: "35011", label: "전주시 완산구" },
    { value: "35012", label: "전주시 덕진구" },
    { value: "35020", label: "군산시" },
    { value: "35030", label: "익산시" },
    { value: "35040", label: "정읍시" },
    { value: "35050", label: "남원시" },
    { value: "35060", label: "김제시" },
    { value: "35310", label: "완주군" },
    { value: "35320", label: "진안군" },
    { value: "35330", label: "무주군" },
    { value: "35340", label: "장수군" },
    { value: "35350", label: "임실군" },
    { value: "35360", label: "순창군" },
    { value: "35370", label: "고창군" },
    { value: "35380", label: "부안군" },
  ],
  // 전라남도
  36: [
    { value: "36010", label: "목포시" },
    { value: "36020", label: "여수시" },
    { value: "36030", label: "순천시" },
    { value: "36040", label: "나주시" },
    { value: "36060", label: "광양시" },
    { value: "36310", label: "담양군" },
    { value: "36320", label: "곡성군" },
    { value: "36330", label: "구례군" },
    { value: "36350", label: "고흥군" },
    { value: "36360", label: "보성군" },
    { value: "36370", label: "화순군" },
    { value: "36380", label: "장흥군" },
    { value: "36390", label: "강진군" },
    { value: "36400", label: "해남군" },
    { value: "36410", label: "영암군" },
    { value: "36420", label: "무안군" },
    { value: "36430", label: "함평군" },
    { value: "36440", label: "영광군" },
    { value: "36450", label: "장성군" },
    { value: "36460", label: "완도군" },
    { value: "36470", label: "진도군" },
    { value: "36480", label: "신안군" },
  ],
  // 경상북도
  37: [
    { value: "37011", label: "포항시 남구" },
    { value: "37012", label: "포항시 북구" },
    { value: "37020", label: "경주시" },
    { value: "37030", label: "김천시" },
    { value: "37040", label: "안동시" },
    { value: "37050", label: "구미시" },
    { value: "37060", label: "영주시" },
    { value: "37070", label: "영천시" },
    { value: "37080", label: "상주시" },
    { value: "37090", label: "문경시" },
    { value: "37100", label: "경산시" },
    { value: "37310", label: "군위군" },
    { value: "37320", label: "의성군" },
    { value: "37330", label: "청송군" },
    { value: "37340", label: "영양군" },
    { value: "37350", label: "영덕군" },
    { value: "37360", label: "청도군" },
    { value: "37370", label: "고령군" },
    { value: "37380", label: "성주군" },
    { value: "37390", label: "칠곡군" },
    { value: "37400", label: "예천군" },
    { value: "37410", label: "봉화군" },
    { value: "37420", label: "울진군" },
    { value: "37430", label: "울릉군" },
  ],
  // 경상남도
  38: [
    { value: "38030", label: "진주시" },
    { value: "38050", label: "통영시" },
    { value: "38060", label: "사천시" },
    { value: "38070", label: "김해시" },
    { value: "38080", label: "밀양시" },
    { value: "38090", label: "거제시" },
    { value: "38100", label: "양산시" },
    { value: "38111", label: "창원시 의창구" },
    { value: "38112", label: "창원시 성산구" },
    { value: "38113", label: "창원시 마산합포구" },
    { value: "38114", label: "창원시 마산회원구" },
    { value: "38115", label: "창원시 진해구" },
    { value: "38310", label: "의령군" },
    { value: "38320", label: "함안군" },
    { value: "38330", label: "창녕군" },
    { value: "38340", label: "고성군" },
    { value: "38350", label: "남해군" },
    { value: "38360", label: "하동군" },
    { value: "38370", label: "산청군" },
    { value: "38380", label: "함양군" },
    { value: "38390", label: "거창군" },
    { value: "38400", label: "합천군" },
  ],
  // 제주
  39: [
    { value: "39010", label: "제주특별자치도 제주시" },
    { value: "39020", label: "제주특별자치도 서귀포시" },
  ],
};