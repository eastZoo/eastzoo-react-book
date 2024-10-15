export interface TrendChart {
  TrdChtId?: number;
  /** 함형No */
  chtShiptypeNo?: string;

  /** 함형 */
  chtShiptypeName?: string;

  /** 함정No */
  chtTrdShipNo?: string;

  /** 함정명 */
  chtShipName?: string;

  /** 시작시간 */
  chtTrdStdTime?: string;

  /** 종료시간 */
  chtTrdEndTime?: string;

  /** 차트 데이터 DB저장 명칭 */
  chtFileName?: string;
}

export interface ChartOption {
  name: string;
  auto: boolean;
  max?: number;
  min?: number;
  chtMax: number;
  chtMin: number;
  visible: boolean;
  color: string;
  data: ChartData[];
}

export interface ChartData {
  value: number | string;
  time: string;
}

export interface ChartTime {
  /** key index */
  chtId?: number;

  TrdChtId?: number;

  /** 장비명 */
  chtMcyName?: string;

  /** 하위장비명 */
  chtLowMcyName?: string;

  /** 센서코드 */
  chtCode?: string;

  /** 센서명 */
  chtName?: string;

  /** 신호(조회결과값) */
  chtSignal?: string;

  /** 단위(조회결과값) */
  chtUnit?: string;

  /** 최대값(조회결과값) */
  chtMax?: number;

  /** 최소값(조회결과값) */
  chtMin?: number;

  /** 평균값(조회결과값) */
  chtAvg?: number;

  /** 차트 Y축 조건 자동 유/무 */
  chtAuto?: boolean;

  /** 최대값(차트 Y축) */
  chtYMax?: number | string;

  /** 최소값(차트 Y축) */
  chtYMin?: number | string;

  /** 차트 표시 유/무 */
  chtVisible?: boolean | string;

  /** 차트색상 */
  chtColor?: string;
}
