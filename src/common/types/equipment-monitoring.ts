export interface EquipmentAlarmStatus {
  section: string[];
  value: number[];
}
export interface AlarmActionStatusDataType {
  critical: any[];
  warning: any[];
}

export interface StateAlarmTableType {
  ste__id: string;
  ste_alarm_time: Date;
  ste_alarm_type: number;
  ste_shiptype_no: string;
  ste_shiptype_name: string;
  ste_ship_no: string;
  ste_ship_name: string;
  ste_mcy_name: string;
  ste_low_mcy_name: string;
  ste_sensor_code: string;
  ste_sensor_name: string;
  ste_alarm_msg: string;
  ste_alarm_value: number;
  ste_alarm_base: null | string;
  ste_alarm_dev: null | string;
  ste_comment: null | string;
  ste_comment_state: number;
  ste_report_state: null | string;
  rpt_id: null | string;
}

export interface EquipmentOperationStatusTimeType {
  powerOn?: boolean;
  time?: string;
}

export interface AlarmStatusByLowmcyLed {
  control?: number;
  vibrationfront?: number;
  lubrication?: number;
  soundproofbox?: number;
  vibrationmiddle?: number;
  fuel?: number;
  start?: number;
  cooling?: number;
  turbine?: number;
  vibrationrear?: number;
  exhaust?: number;
  superCharger?: number;
  vibrationEngine?: number;
  vibrationGenerator?: number;
  generation?: number;
  engine?: number;
}
