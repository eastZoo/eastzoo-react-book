export interface Sensor {
  /** index key */
  // ssrId: string;

  /** 함형 */
  ssrShiptypeName: string;

  /** 함정명 */
  ssrShipName: string;

  /** 장비명 */
  ssrMachineName: string;

  /** 하위장비명 */
  ssrEquipment: string;

  /** 센서 코드 */
  ssrCode: string;

  /** 센서명 */
  ssrName: string;

  /** 센서값 */
  ssrValue: number;

  /** 신호 값 */
  ssrSignal: string;

  /** 센서값 타입 */
  ssrType: string;

  /** 공급대상 */
  ssrSupplier: string;

  /** 알람 센서 */
  ssrAlarm: string;

  /** 센서 LL */
  ssrLl: string;

  /** 센서 L */
  ssrL: string;

  /** 센서 H */
  ssrH: string;

  /** 센서 Hh */
  ssrHh: string;

  /** 센서 MIN */
  ssrMin: string;

  /** 센서 MAX */
  ssrMax: string;

  /** 단위 */
  ssrUnit: string;

  /** 설명 */
  ssrDescription: string;

  /** 센서 수집 시간 */
  ssrTime: Date;
}

export interface SensorData {
  /** 함형 */
  shiptypeName: string;

  /** 함정명 */
  shipName: string;

  /** 장비명 */
  machineName: string;

  /** 하위장비명 */
  equipment: string;

  /** 센서명 */
  sensor: string;

  /** 센서값 */
  sensorValue: number;

  /** 센서 수집 시간 */
  createdTime: Date;
}
