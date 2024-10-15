export interface ReportPropsType {
  machinery: string;
  machineryCode: string;
  reportType: string;
  ship: string;
  shipType: string;
}

export interface PostReportType {
  rpt_no?: number;
  rpt_time?: string;
  rpt_user?: string;
  rpt_title?: string;
  rpt_shiptype_no?: string;
  rpt_shiptype_name?: string;
  rpt_ship_no?: string;
  rpt_ship_name?: string;
  rpt_mcy_name?: string;
  rpt_low_mcy_name?: string;
  rpt_std_time?: string;
  rpt_end_time?: string;
  rpt_comment?: string;
  rpt_report_type?: number;
  rpt_report_state?: number;
  user_id?: string;
  user_name?: string;
  user_time?: string;
}

export interface selectManagerProps {
  // 보고서 유형
  reportType?: string;
  // 함형명 코드
  shipTypeNo?: any;
  // 함형명
  shipTypeName?: string;
  // 함정명 코드
  shipNo?: any;
  // 함정명
  shipName?: string;
  // 장비 코드
  mcyNo?: string;
  // 장비명
  mcyName?: string;
  // 하위장비 코드
  lowMcyNo?: string;
  // 하위장비명
  lowMcyName?: string;
  // 시작일
  startDate?: string;
  // 종료일
  endDate?: string;
  // 보고서 유형 ( 0: 이상 탐지 , 1: 진단, 2: 고장)
  rptClass?: number;
  // 센서 코드
  sensorCode?: string;
  // 센서 이름
  sensorName?: string;
  userTime?: any;

  // 차트 제작 메뉴로 이동 시 필요 props
  rptAlarmTime?: string;
  rptSensorCode?: string;
}

export interface ReportBasicInfoPageProps extends selectManagerProps {
  rptId?: any; // 보고서관리 테이블 아이디
  dtrId?: any; // 보고서 마스터 테이블 아이디(진단,고장)
  artId?: any; // 보고서 마스터 테이블 아이디(이상탐지)
  formType?: any | string; // diagnosis, failure, action 등 UI그리는데 필요한 값
  reportType?: any; //  ( 1: 최초, 2: 조치, 3: 조치후 분석 )
  rptClass?: number; // 리포트 구분( 1 = 진단 보고서, 2 = 고장 보고서, 3 = 이상탐지보고서 )
  detailData?: any;
  rptActionMsg?: any;
  userTime?: any;
  rptNo?: string; //  보고서 번호
  equipmentCodeSeq?: string; // 장비부호/일련번호
  sensorName?: string;
  reportState?: number;
}

// 이상탐지 알람 타입
export interface AlarmReportProps {
  rptId?: string;
  steAlarmBase?: number;
  steAlarmDev?: number;
  steAlarmMsg?: string;
  steAlarmTime?: string;
  steAlarmType?: number;
  steAlarmValue?: number;
  steComment?: null;
  steCommentState?: number;
  steId?: string;
  steLowMcyName?: string;
  steMcyName?: string;
  steReportState?: number;
  steSensorCode?: string;
  steSensorName?: string;
  steShipName?: string;
  steShipNo?: string;
  steShiptypeName?: string;
  steShiptypeNo?: string;
}
