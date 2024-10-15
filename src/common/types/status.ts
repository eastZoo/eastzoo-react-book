export interface Status {
  /** index key */
  steId: string;

  /** 알람 발생 시간 */
  steAlarmTime: string;

  /** 레벨 */
  steAlarmType: number;

  /** 함형명 */
  steShiptypeName: string;

  /** 함정명 */
  steShipName: string;

  /** 장비명 */
  steMcyName: string;

  /** 하위장비명 */
  steLowMcyName: string;

  /** 센서명 + 설명 */
  steSensorName: string;

  /** 센서코드 */
  steSensorCode: string;

  /** 알람 메시지 */
  steAlarmMsg: string;

  /** 알림값 */
  steAlarmValue: number;

  /** 기준값 */
  steAlarmBase: number;

  /** 편차 */
  steAlarmDev: number;

  /** 코멘트 */
  steComment: string;

  /** 보고서 */
  steReportState: number;
}
