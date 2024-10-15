export interface EquipmentOperationStatus {
  dashboard1?: number;
  dashboard2?: number;
  dashboard3?: number;
  dashboard4?: number;
  machine1?: number;
  machine2?: number;
  machine3?: number;
  machine4?: number;
  machine5?: number;
  machine6?: number;
  machine7?: number;
  machine8?: number;
  machine9?: number;
  machine10?: number;
  machine11?: number;
  machine12?: number;
  machine13?: number;
  machine14?: number;
  machine15?: number;
  machine16?: number;
  machine17?: number;
  machine18?: number;
}

export interface EquipmentOperationStatusLED {
  gasturbine?: number;
  generator1?: number;
  generator2?: number;
  generator3?: number;
  generator4?: number;
}

export interface EquipmentSign {
  /** key index */
  eqmSId?: number;

  /** 함정 장비부호 파일*/
  eqmFId?: number;

  /** 함형No */
  eqmSShiptypeNo: string;

  /** 함형 */
  eqmSShiptype: string;

  /** 함정No */
  eqmSShipNo: string;

  /** 함정명 */
  eqmSShipName: string;

  /** 장비No */
  eqmSMcyNo: string;

  /** 장비명 */
  eqmSMcyName: string;

  /** 장비부호 */
  eqmSMcyCode: string;

  /** 일련번호 */
  eqmSMcySeq: string;
}

export interface EquipmentSensor {
  id: number;
  sensorName: string;
  value: string;
  unit: string;
}
