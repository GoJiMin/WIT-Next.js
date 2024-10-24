import { useEffect, useRef, useState } from "react";
import styles from "../styles.module.css";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

type Props = {
  latitude: string;
  longitude: string;
};

export default function KaKaoMap({ latitude, longitude }: Props) {
  const [kakaoMap, setKakaoMap] = useState<Window["kakao"]>(null);

  const mapContainer = useRef<HTMLDivElement | null>(null);

  // 카카오맵 생성.
  useEffect(() => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapContainer.current, options);
      setKakaoMap(map);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapContainer]);

  // 위치 변경.
  useEffect(() => {
    if (kakaoMap === null) return;

    const center = new window.kakao.maps.LatLng(latitude, longitude);

    const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(kakaoMap);
    kakaoMap.panTo(center);
  }, [kakaoMap, latitude, longitude]);

  return <div ref={mapContainer} className={styles.kakaoMap} />;
}
