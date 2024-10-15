export interface EcsAlarm {
  /** index key */
  ecsId: string;

  /** 알람 발생 시간 */
  ecsAlarmTime: string;

  /** 함형No */
  ecsShiptypeNo: number;

  /** 함형명 */
  ecsShiptypeName: string;

  /** 함정명 */
  ecsShipName: string;

  /** 장비명 */
  ecsMcyName: string;

  /** 하위장비명 */
  ecsLowMcyName: string;

  /** 센서명 + 설명 */
  ecsSensorName: string;

  /** 센서 코드 */
  ecsSensorCode: string;

  /** 알람 Type */
  ecsAlarmType: string;

  /** Thresholds(기준치) */
  ecsAlarmThreshold: number;

  /** Range(범위) */
  ecsAlarmRange: number;

  /** Unit(단위) */
  ecsAlarmUnit: string;

  /** Description */
  ecsAlarmMemo: string;
}
